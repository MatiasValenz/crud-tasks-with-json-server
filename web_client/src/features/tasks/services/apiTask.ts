import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001';
export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task'],
        }),
        updateTask: builder.mutation({
            query: ({id, ...patch}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['Task'],
        }),
    })
})

export const {useGetTasksQuery, useUpdateTaskMutation} = taskApi;
