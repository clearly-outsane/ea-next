//TODO - Refactor google autocomplete form to use `use-places-autocomplete` instead

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autocomplete from "react-google-autocomplete";

//component
import Button from "../PrimaryButton";

//styles
import styles from "./findAgentForm.module.scss";

const FindAgentForm = () => {
  const inputRef = useRef();

  const [off, setOff] = useState(null);

  const [formData, setFormData] = useState({
    zipCodeSuggestionList: [],
    zipCodeValue: "",
    zipCodeSubmitBtnEnable: false,
    addressValue: "",
    cityValue: "",
    stateValue: "",
    addressSubmitBtnEnable: false,
  });
  const [formType, setFormType] = useState("Seller");

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_GMAPS_API_KEY);

    setOff("off");
    return () => {};
  }, [formData]);

  const onPlaceSelected = (place) => {
    console.log(place);
    let componentForm = {
      street_number: "short_name",
      route: "long_name",
      locality: "long_name",
      administrative_area_level_1: "short_name",
      country: "long_name",
      postal_code: "short_name",
    };

    let tempState = { ...formData };
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];

      if (componentForm[addressType]) {
        let addressData =
          place.address_components[i][componentForm[addressType]];

        if (addressType === "postal_code") {
          tempState = { ...tempState, zipCodeValue: addressData };
        }
        if (addressType === "locality") {
          tempState = { ...tempState, cityValue: addressData };
        }
        if (addressType === "administrative_area_level_1") {
          tempState = { ...tempState, stateValue: addressData };
        }
      }
    }

    if (place && place.formatted_address) {
      let forMatedAddress = place.formatted_address.split(",");
      tempState = {
        ...tempState,
        addressValue: forMatedAddress[0],
      };
    }

    setFormData({ ...formData, ...tempState });
  };

  return (
    <>
      <div className={`${styles["hero-form"]} flex flex-col`}>
        <div
          className={`${styles["hero-form__toggle-form-wrapper"]} flex flex-row justify-center content-center align-center`}
        >
          <div
            className={`h2 ${styles["hero-form__h2"]} ${
              styles["hero-form__toggle-form"]
            } ${formType === "Seller" ? styles["hero-form__h2--active"] : ""} `}
            onClick={() => {
              setFormType("Seller");
            }}
          >
            I’m a Seller
          </div>
          <div
            className={`h2 ${styles["hero-form__h2"]} ${
              styles["hero-form__toggle-form"]
            } ${formType === "Buyer" ? styles["hero-form__h2--active"] : ""} `}
            onClick={() => {
              setFormType("Buyer");
            }}
          >
            I’m a Buyer
          </div>
        </div>

        <div
          className={`flex justify-end content-end items-end ${
            formType === "Seller" ? "" : "hidden"
          }`}
        >
          <form
            className='flex flex-col justify-center content-center items-center w-full'
            method='POST'
            action='https://www.effectiveagents.com/sellers/'
            name='Sellers'
            id='frm9'
            autoComplete='off'
          >
            <div className={`${styles["hero-form__input-wrapper"]} relative`}>
              <Autocomplete
                autoComplete={off}
                id='address'
                name='AddressData'
                placeholder='Enter Your Address'
                apiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY.toString()}
                onPlaceSelected={onPlaceSelected}
                className={`${styles["hero-form__input"]}`}
                options={{
                  types: ["geocode"],
                  componentRestrictions: { country: "us" },
                }}
              />

              <div
                className={` ${styles["hero-form__location-icon"]} flex items-center`}
              >
                <Image
                  src={"/svgs/location-pin.svg"}
                  width={30}
                  height={30}
                  alt='Location pin icon'
                />
              </div>
            </div>
            <div className='hidden'>
              <input
                type='radio'
                name='persona'
                className='completed'
                value='seller'
              />
              <input
                type='hidden'
                placeholder='Address *'
                maxLength='200'
                id='Address'
                name='Address'
                data-name='Address'
                value={formData.addressValue}
              />
              <input
                type='hidden'
                placeholder='City *'
                maxLength='200'
                id='ccity2'
                name='City'
                data-name='City'
                value={formData.cityValue}
              />
              <input
                type='hidden'
                placeholder='State/Region *'
                maxLength='200'
                id='cstate2'
                name='State'
                data-name='State'
                value={formData.stateValue}
              />
              <input
                type='hidden'
                placeholder='Zip/Postal Code *'
                maxLength='200'
                id='czip2'
                name='Zip-Code'
                data-name='Zip'
                value={formData.zipCodeValue}
              />
            </div>
            <Button
              href='https://www.effectiveagents.com/sellers/?c1=a'
              text='Find an Agent'
              type='submit'
            />
          </form>
        </div>

        <div
          className={`flex justify-end content-end items-end ${
            formType === "Buyer" ? "" : "hidden"
          }`}
        >
          <form
            className='flex flex-col justify-center content-center items-center w-full'
            method='post'
            autoComplete='off'
            action='https://www.effectiveagents.com/buyers/'
            name='Buyers'
          >
            <div className={`${styles["hero-form__input-wrapper"]}`}>
              <Autocomplete
                ref={inputRef}
                // type='number'
                id='zipCode'
                autoComplete={off}
                name='Zip-Code-Buyer'
                data-name='Zip'
                placeholder='Enter ZIP Code'
                apiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}
                onPlaceSelected={onPlaceSelected}
                className={`${styles["hero-form__input"]}`}
                options={{
                  types: ["(regions)"],
                  componentRestrictions: { country: "us" },
                }}
              />
              <div
                className={` ${styles["hero-form__location-icon"]} flex items-center`}
              >
                <Image
                  src={"/svgs/location-pin.svg"}
                  width={30}
                  height={30}
                  alt='Location pin icon'
                />
              </div>
            </div>
            <div className='hidden'>
              <input
                type='radio'
                name='persona'
                className='completed'
                value='buyer'
              />
              <input
                type='hidden'
                placeholder='City *'
                maxLength='200'
                id='ccity2'
                name='City'
                data-name='City'
                value={formData.cityValue}
              />
              <input
                type='hidden'
                placeholder='State/Region *'
                maxLength='200'
                id='cstate2'
                name='State'
                data-name='State'
                value={formData.stateValue}
              />
              <input
                type='hidden'
                placeholder='Zip/Postal Code *'
                maxLength='200'
                id='czip2'
                name='Zip-Code'
                data-name='Zip'
                value={formData.zipCodeValue}
              />
            </div>
            <Button
              href='https://www.effectiveagents.com/sellers/?c1=a'
              text='Find an Agent'
              type='submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FindAgentForm;
