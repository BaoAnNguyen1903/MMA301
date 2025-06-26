// contexts/AuthContext.tsx
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  email: string;
  password: string;
};

type State = {
  user: User | null;
  loading: boolean;
};

type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "LOADING_FINISH" };

const initialState: State = {
  user: null,
  loading: true
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "LOADING_FINISH":
      return { ...state, loading: false };
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: State;
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  logout: () => Promise<void>;
}>({
  state: initialState,
  login: async () => {},
  logout: async () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: string, password: string, remember: boolean) => {
    if (!email || !password)
      throw new Error("Email hoặc mật khẩu không được để trống");

    const user = { email, password };

    if (remember) {
      await AsyncStorage.setItem("savedUser", JSON.stringify(user));
    } else {
      await AsyncStorage.removeItem("savedUser");
    }

    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("savedUser");
    dispatch({ type: "LOGOUT" });
  };

  // Auto-login nếu có dữ liệu
  useEffect(() => {
    const checkSavedLogin = async () => {
      const saved = await AsyncStorage.getItem("savedUser");
      if (saved) {
        const user = JSON.parse(saved) as User;
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOADING_FINISH" });
      }
    };
    checkSavedLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
