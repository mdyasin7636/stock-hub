import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const initialState = {
      name: "",
      email: "",
      isLoading: true,
      isError: false,
      error: "",
      photo: ""
}
export const createUser = createAsyncThunk("auth/createUser", async ({ email, password, name, photo }) => {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser,
            {
                  displayName: name, photoURL: photo
            })
      return {
            email: data.user.email,
            name: data.user.displayName,
            photo: data.user.photoURL
      }
})

export const logIn = createAsyncThunk("auth/logIn", async ({ email, password, navigate, from }, { rejectWithValue }) => {
      try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            navigate(from, { replace: true });
            return {
                  email: data.user.email,
                  name: data.user.displayName,
            }

      } catch (error) {
            rejectWithValue(error.message)
      }
})
export const socialLogin = createAsyncThunk("auth/SocialLogin", async ({ navigate, from }, { rejectWithValue }) => {
      try {
            const provider = new GoogleAuthProvider();
            const data = await signInWithPopup(auth, provider)
            navigate(from, { replace: true });

            return {
                  email: data.user.email,
                  name: data.user.displayName,
                  photo: data.user.photoURL
            }

      } catch (error) {
            rejectWithValue(error.message)
      }
})

const authSlice = createSlice({
      name: "auth",
      initialState,
      reducers: {
            setUser: (state, action) => {
                  state.name = action.payload.name
                  state.email = action.payload.email
            },
            toggleLoading: (state, action) => {
                  state.isLoading = action.payload
            },
            logOut: (state) => {
                  state.name = ""
                  state.email = ""
            }
      },
      extraReducers: (builder) => {
            builder.addCase(createUser.pending, (state) => {
                  state.isLoading = true
                  state.isError = false
                  state.error = ""
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            }).addCase(createUser.fulfilled, (state, action) => {
                  state.isLoading = false
                  state.isError = false
                  state.error = ""
                  state.email = action.payload.email
                  state.name = action.payload.name
                  state.photo = action.payload.photo
            }).addCase(createUser.rejected, (state, action) => {
                  state.isLoading = false
                  state.isError = true
                  state.error = action.error.message
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            }).addCase(logIn.pending, (state) => {
                  state.isLoading = true
                  state.isError = false
                  state.error = ""
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            }).addCase(logIn.fulfilled, (state, action) => {
                  state.isLoading = false
                  state.isError = false
                  state.error = ""
                  state.email = action.payload.email
                  state.name = action.payload.name
                  state.photo = action.payload.photo
            }).addCase(logIn.rejected, (state, action) => {
                  state.isLoading = false
                  state.isError = true
                  state.error = action.error.message
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            }).addCase(socialLogin.pending, (state) => {
                  state.isLoading = true
                  state.isError = false
                  state.error = ""
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            }).addCase(socialLogin.fulfilled, (state, action) => {
                  state.isLoading = false
                  state.isError = false
                  state.error = ""
                  state.email = action.payload.email
                  state.name = action.payload.name
                  state.photo = action.payload.photo
            }).addCase(socialLogin.rejected, (state, action) => {
                  state.isLoading = false
                  state.isError = true
                  state.error = action.error.message
                  state.email = ""
                  state.name = ""
                  state.photo = ""
            })
      }
})
export const { setUser, toggleLoading, logOut} = authSlice.actions
export default authSlice.reducer
