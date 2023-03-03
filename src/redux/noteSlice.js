import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noteApi = createApi({
  reducerPath: "noteApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://619952f49022ea0017a7ae2a.mockapi.io/api/v1",
  }),

  tagTypes: ["Notes"],

  endpoints: (builder) => ({
    fetchNotes: builder.query({
      query: () => "/notes",
      providesTags: ["Notes"],
    }),

    fetchNoteById: builder.query({
      query: (id) => `/notes/${id}`,
      providesTags: ["Notes"],
    }),

    createNote: builder.mutation({
      query({ title, description }) {
        return {
          url: "/notes",
          method: "POST",
          body: {
            title,
            description,
          },
        };
      },
      invalidatesTags: ["Notes"],
    }),

    updateNote: builder.mutation({
      query({ id, status, ...rest }) {
        return {
          url: `/notes/${id}`,
          method: "PUT",
          body: {
            status,
            rest
          },
        };
      },
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const {
  useFetchNotesQuery,
  useFetchNoteByIdQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation
} = noteApi;