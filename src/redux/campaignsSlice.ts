import { CampaignsInterface } from '@/interface/capmaigns.interface';
import { generateRandomCampaign } from '@/util/generateCampaignsTestData.util';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCampaigns = createAsyncThunk('campaigns/fetchCampaigns', async () => {
  const res = await fetch('https://avatar-generator-git-dev-dap-frontend.vercel.app/api/v1/campaigns');

  if (!res.ok)
    throw new Error('Failed to fetch campaigns');
  return res.json();
});

const initialState: {
  data: CampaignsInterface[],
  loading: boolean,
  errorMessage: string
} = {
  data: [],
  loading: false,
  errorMessage: "",
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampaigns.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
      state.loading = false;
      const newData: CampaignsInterface[] = []

      action.payload.data.map((campaign: string) => {
        newData.push(generateRandomCampaign(campaign));
      })
      state.data = newData;
    });

    builder.addCase(fetchCampaigns.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message ?? 'Error desconocido';
    });
  },
});

export { fetchCampaigns };
export default campaignsSlice.reducer;
