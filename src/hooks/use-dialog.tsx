import { useCallback, useState } from 'react';

export function useDialog(state = false) {
  const [open, setOpen] = useState(state);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return {
    handleClose,
    handleOpen,
    handleToggle,
    open
  };
}
