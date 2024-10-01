import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axios from "axios";

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: "" }) =>
//   async ({ url, method, data, params, headers }) => {
//     try {
//       const result = await axios({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  tagTypes: ["Properties"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://express-api.propertyhive.com.ng/api/v1",
  }),
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => "/properties",
      providesTags: (result) =>
        result
          ? [
              ...result.properties.map(({ id }) => ({
                type: "Properties",
                id,
              })),
              {
                type: "Properties",
                id: "LIST",
              },
            ]
          : [{ type: "Properties", id: "LIST" }],
      transformErrorResponse: (response) => {
        if (
          response.status === 404 &&
          new RegExp("no property", "i").test(response.data.message)
        )
          return "No Property Found";
        return "Something went wrong";
      },
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/properties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (id) => [{ type: "Properties", id }],
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          propertiesApi.util.updateQueryData(
            "getAllProperties",
            id,
            (draft) => {
              const index = draft.properties.findIndex(
                (property) => property.id === id,
              );
              draft.properties.splice(index, 1);
            },
          ),
        );
        try {
          await queryFulfilled;
          // dispatch(propertiesApi.util.invalidateTags(["Properties"]));
        } catch (err) {
          console.log("onQueryStarted error: ", err);
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetAllPropertiesQuery, useDeletePropertyMutation } =
  propertiesApi;
