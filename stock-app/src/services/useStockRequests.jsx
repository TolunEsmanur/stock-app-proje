// import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import {
  fetchFail,
  fetchStart,
  //   getFirmsSuccess,
  //   getSalesSuccess,
  getStockSuccess,
} from "../features/stockSlice"
import useAxios from "./useAxios"

const useStockRequests = () => {
  //   const { token } = useSelector((state) => state.auth)
  const { axiosToken } = useAxios()
  const dispatch = useDispatch()

  //   const getFirms = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
  //         headers: { Authorization: `Token ${token}` },
  //       })
  //       dispatch(getFirmsSuccess(data.data))
  //       console.log(data)
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       console.log(error)
  //     }
  //   }

  //   const getSales = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/sales`, {
  //         headers: { Authorization: `Token ${token}` },
  //       })
  //       dispatch(getSalesSuccess(data.data))
  //       console.log(data)
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       console.log(error)
  //     }
  //   }

  //   const getStock = async (path) => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axios(
  //         `${process.env.REACT_APP_BASE_URL}/${path}`,
  //         {
  //           headers: { Authorization: `Token ${token}` },
  //         }
  //       )
  //       //   const stockData = data.data
  //       dispatch(getStockSuccess({ data: data.data, path }))
  //       console.log(data)
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       console.log(error)
  //     }
  //   }

  const getStock = async (path) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosToken.get(path)
      dispatch(getStockSuccess({ data: data.data, path }))
      
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteStock = async (path,id) => {
    dispatch(fetchStart())
    try {
      await axiosToken.delete(`${path}/${id}`)
      getStock(path)
      toastSuccessNotify("silme işlemi başarılı")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("silme işlemi başarısız")
    }
  }

  const postStock = async (path,data) => {
    dispatch(fetchStart())
    try {
      await axiosToken.post(path,data)
      getStock(path)
    } catch (error) {
      dispatch(fetchFail())
    }
  }
   
  //put işlemi uptade işlemidir,değiştirilecek verinin tamamı gönderilir.
  const putStock = async (path,data) => {
    dispatch(fetchStart())
    try {
      await axiosToken.put(`/${path}/${data._id}`,data)
      toastSuccessNotify('güncelleme başarılı')
      getStock(path)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify('güncelleme başaırısız oldu')
    }
  }

  //   return { getFirms, getSales }
  return { getStock, deleteStock, postStock,putStock}
}

export default useStockRequests
