import dayjs from "dayjs";
import { useState } from "react";

export function useCalendar(now: dayjs.Dayjs) {
  const [selectedDate, setSelectedDate] = useState(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  function subtractOneMonth() {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");

    setSelectedDate(newSelectedDate);
  }

  function addOneMonth() {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");

    setSelectedDate(newSelectedDate);
  }

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  function hideDatePicker() {
    setDatePickerVisibility(false);
  }

  function handleConfirm(date: dayjs.Dayjs) {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  }

  return {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractOneMonth,
    addOneMonth,
  };
}
