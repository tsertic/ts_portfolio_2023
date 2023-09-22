"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
interface IReduxProvider {
  children: React.ReactNode;
}
export const ReduxProvider: React.FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
