import {
  onOpenDateModal,
  onCloseDateModal,
  useAppDispatch,
  useAppSelector,
} from "../store";

export const useUiStore = () => {
  const dispatch = useAppDispatch();
  const { isDateModalOpen } = useAppSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () =>
    isDateModalOpen ? openDateModal() : closeDateModal();

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
    toggleDateModal,
  };
};
