'use client'

import { ReactNode, useEffect } from "react"
import { fetchCampaigns } from "@/redux/campaignsSlice";
import { useAppDispatch } from "@/redux/hooks";

interface GetDataReduxProps {
  children: ReactNode;
}

export default function GetDataRedux({ children }: GetDataReduxProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCampaigns());
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchData();
  }, []);

  return (<>
    {children}
  </>)
}