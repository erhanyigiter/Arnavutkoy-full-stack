import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../features/serviceSlice";

export default function Service() {
  // Redux store'dan services verisini alıyoruz
  const services = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  const serviceStatus = useSelector((state) => state.service.status);

  useEffect(() => {
    if (serviceStatus === 'idle') {
      dispatch(fetchServices());
    }
  }, [serviceStatus, dispatch]);

  return (
    <div>
<Hero title="Service" />
      
      <div className="service pt-100 pb-70">
        <div className="container">
          <div className="row">
            {services.map((item) => (
              <ServiceItem service={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
