import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { createContext, useCallback, useContext, useState } from "react";

const SnackbarContext = createContext({
  showMessage(input) {
    // abstract method
  },
  hideMessage() {
    // abstract method
  }
});

// TODO: message should be hidden after timeout when timeout is passed
export const SnackbarProvider = ({ children }) => {
  const [state, setState] = useState();

  const showMessage = useCallback(({ severity, message, timeout }) => {
    setState({ severity, message });
  }, []);

  const hideMessage = useCallback(() => {
    setState(undefined);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showMessage, hideMessage }}>
      {children}
      {state?.message && (
        <Snackbar open>
          <Alert severity={state.severity}>{state.message}</Alert>
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => useContext(SnackbarContext);
