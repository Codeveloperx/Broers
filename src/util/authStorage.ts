export interface User {
  email: string;
}

const STORAGE_KEYS = {
  user: "user",
  isAuthenticated: "isAuthenticated",
};

export const getStoredAuth = (): {
  user: User | null;
  isAuthenticated: boolean;
} => {
  const storedUser = localStorage.getItem(STORAGE_KEYS.user);
  const storedAuthStatus = localStorage.getItem(STORAGE_KEYS.isAuthenticated);

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: storedAuthStatus === "true",
  };
};

export const saveAuth = (user: User) => {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEYS.isAuthenticated, "true");
};

export const clearAuth = () => {
  localStorage.removeItem(STORAGE_KEYS.user);
  localStorage.removeItem(STORAGE_KEYS.isAuthenticated);
};
