import { createSlice } from "@reduxjs/toolkit";

const initialState = { quizzes: {} };

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
});