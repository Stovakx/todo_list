export const openModal = (action, selectedDay, setShowEventModal) => {
    setShowEventModal({
      action,
      selectedDay,
    });
};  
  
export const closeModal = (setShowEventModal) => {
    setShowEventModal(null);
};
