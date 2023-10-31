import { createSlice } from '@reduxjs/toolkit';


const initialState = { topics: {} };

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,

    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: [],
            };
        }
    },
    extraReducers: {
        "quizzes/AddQuiz": (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;