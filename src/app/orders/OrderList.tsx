'use client'
import { useOrdersData } from "@/src/hooks/useOrdersData"
import Spinner from "@/src/components/Spinner";
import { OrdersListItem } from "./OrdersListItem";

export const OrderList = () => {
  const ordersList = useOrdersData();

  if(!ordersList) return <div><Spinner/><span>...Loding orders</span></div>
  if(ordersList.length == 0 ) return <span>There not orders</span>
  return (
    <div>
      {
        ordersList.map(order => (
          <OrdersListItem key={order.client} order={order} />
        )
        )
      }
    </div>
  )
}
