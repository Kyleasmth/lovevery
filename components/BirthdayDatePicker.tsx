import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface BirthdayDatePickerProps {
  today: any;
  setBirthday: (birthday: any) => void;
  birthday?: any;
}

const BirthdayDatePicker: React.FC<BirthdayDatePickerProps> = ({
  setBirthday,
  today,
  birthday,
}) => {
  const pickerValue = birthday ? birthday : today;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birth date/due date"
        value={pickerValue}
        onChange={(newValue) => {
          setBirthday(dayjs(newValue).format("MM/DD/YYYY"));
        }}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
    </LocalizationProvider>
  );
};

export default BirthdayDatePicker;
