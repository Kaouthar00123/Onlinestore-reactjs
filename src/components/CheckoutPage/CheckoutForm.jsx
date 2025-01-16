import React, { useState } from "react";
import CheckoutPart from "./CheckoutPart";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  Textarea,
  TextInput,
  Select,
  Modal,
} from "flowbite-react";
import DeliveryCard from "./DeliveryCard";

export default function CheckoutForm() {
  const [openpopsuccefull, setopenpopsuccefull] = useState(false);
  const [userinfo, setuserinfo] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    emailaddress: "",
  });
  const [deliveryinfo, setdeliveryinfo] = useState({
    deliverymethod: "",
    deliveryplace: "",
    address: "",
    pays: "",
    wilaya: "",
    state: "",
  });
  const [paymentinfo, setpaymentinfo] = useState({
    paymentmethod: "",
    paymentcard: "",
    cardname: "",
    expire: "",
    cvc: "",
  });
  const [extrainfo, setextrainfo] = useState("");
  const [arrayboxselect, setarrayboxselect] = useState([0, 0]);
  const [boxselectedindex, setboxselectedindex] = useState(-1);
  const [arrayboxselect2, setarrayboxselect2] = useState([0, 0]);
  const [boxselectedindex2, setboxselectedindex2] = useState(-1);

  return (
    <form action="" className="w-2/3">
      <div id="deliveryInfo" className="flex flex-col gap-4 w-full">
        <h2>Contact and Delivery informations</h2>
        <CheckoutPart numEtape="1" title="Customer informations">
          {/* inputs */}
          {/* First and Last Name  */}
          <div className="flex gap-5 mb-3">
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="firstname"
                value="Your first name"
              />
              <TextInput
                id="firstname"
                type="text"
                placeholder=""
                required
                className="w-full"
                onChange={(e) =>
                  setuserinfo((previousState) => ({
                    ...previousState,
                    firstname: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="lasttname"
                value="Your last name"
              />
              <TextInput
                id="lastname"
                type="text"
                placeholder=""
                required
                onChange={(e) =>
                  setuserinfo((previousState) => ({
                    ...previousState,
                    lastname: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          {/* Email and Phone number */}
          <div className="flex gap-5 mb-3">
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="email"
                value="Your email"
              />
              <TextInput
                id="email"
                type="email"
                placeholder="test@gmail.com"
                onChange={(e) =>
                  setuserinfo((previousState) => ({
                    ...previousState,
                    emailaddress: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="phonenumber"
                value="Your Phone number"
              />
              <TextInput
                id="phonenumber"
                type="text"
                placeholder=""
                required
                onChange={(e) =>
                  setuserinfo((previousState) => ({
                    ...previousState,
                    phonenumber: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </CheckoutPart>
        <CheckoutPart numEtape="2" title="Delivery informations">
          {/* inputs */}
          {/* Country and City*/}
          <div className="flex gap-5 w-[80%] mb-4">
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="countries"
                value="Select your country"
              />
              <Select
                id="countries"
                className="text-gray-500"
                required
                onChange={(e) =>
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    pays: e.target.value,
                  }))
                }
              >
                <option value="Algeria">Algeria</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Tunisia">Tunisia</option>
              </Select>
            </div>
            <div className="w-1/2">
              <Label
                className="mb-2 block"
                htmlFor="cities"
                value="Select your city"
              />
              <Select
                id="cities"
                required
                onChange={(e) =>
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    wilaya: e.target.value,
                  }))
                }
              >
                <option value="Algeries">Algeries</option>
                <option value="Oran">Oran</option>
                <option value="Tipaza">Tipaza</option>
                <option value="Annaba">Annaba</option>
                <option value="Adrar">Adrar</option>
              </Select>
            </div>
          </div>
          {/* State and address */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="mb-4 w-[80%]">
              <Label
                className="mb-2 block"
                htmlFor="state"
                value="Your state"
              />
              <TextInput
                id="state"
                type="text"
                placeholder=""
                onChange={(e) =>
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    state: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <Label
                className="mb-2 block"
                htmlFor="address"
                value="Your address"
              />
              <TextInput
                id="address"
                type="text"
                placeholder=""
                onChange={(e) =>
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    address: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          {/* Delivery method and collect point */}
          <div id="deliverymethod" className="mb-5">
            <Label
              className="mb-2 block"
              htmlFor="state"
              value="Delivery method"
            />
            <div className="flex gap-4">
              <DeliveryCard
                method="Standard"
                details="4–10 business days"
                state={false}
                select={arrayboxselect[0]}
                onClick={(e) => {
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    deliverymethod: "Standard",
                  }));
                  setarrayboxselect((prev) => {
                    if (boxselectedindex > -1) {
                      prev[boxselectedindex] = 0;
                    }
                    prev[0] = 1;
                    return prev;
                  });
                  setboxselectedindex(0);
                }}
              />
              <DeliveryCard
                method="Express"
                details="2–5 business days"
                state={false}
                select={arrayboxselect[1]}
                onClick={(e) => {
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    deliverymethod: "Express",
                  }));
                  setarrayboxselect((prev) => {
                    if (boxselectedindex > -1) {
                      prev[boxselectedindex] = 0;
                    }
                    prev[1] = 1;
                    return prev;
                  });
                  setboxselectedindex(1);
                }}
              />
            </div>
          </div>
          <div id="deliverymanner" className="mb-5">
            <Label
              className="mb-2 block"
              htmlFor="state"
              value="Delivery manner"
            />
            <div className="flex gap-4">
              <DeliveryCard
                method="A point precis"
                details="+distane price"
                state={false}
                select={arrayboxselect2[0]}
                onClick={(e) => {
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    deliveryplace: "A point precis",
                  }));
                  setarrayboxselect2((prev) => {
                    if (boxselectedindex2 > -1) {
                      prev[boxselectedindex2] = 0;
                    }
                    prev[0] = 1;
                    return prev;
                  });
                  setboxselectedindex2(0);
                }}
              />
              <DeliveryCard
                method="Au niveau de point de collect"
                details="2–5 business days"
                state={false}
                select={arrayboxselect2[1]}
                onClick={(e) => {
                  setdeliveryinfo((previousState) => ({
                    ...previousState,
                    deliveryplace: "Au niveau de point de collect",
                  }));
                  setarrayboxselect2((prev) => {
                    if (boxselectedindex2 > -1) {
                      prev[boxselectedindex2] = 0;
                    }
                    prev[1] = 1;
                    return prev;
                  });
                  setboxselectedindex2(1);
                }}
              />
            </div>
          </div>
        </CheckoutPart>
        {/* Payment informations */}
        <CheckoutPart numEtape="3" title="Payment informations">
          {/* inputs */}
          {/* Choose payment method */}
          {/* <h3>Choose payment method</h3> */}
          <fieldset className="flex max-w-md flex-col gap-4 mb-5">
            {/* <legend className="mb-4 text-gray-600">
                  Choose your payment method:{" "}
                </legend> */}
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <Radio
                  id="united-state"
                  name="paymentmethod"
                  value="cache"
                  defaultChecked
                  onChange={(e) =>
                    setdeliveryinfo((previousState) => ({
                      ...previousState,
                      paymentmethod: e.target.value,
                    }))
                  }
                />
                <Label htmlFor="united-state">Cache</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="germany"
                  name="paymentmethod"
                  value="card"
                  onChange={(e) =>
                    setdeliveryinfo((previousState) => ({
                      ...previousState,
                      paymentmethod: e.target.value,
                    }))
                  }
                />
                <Label htmlFor="germany">Card</Label>
              </div>
            </div>
          </fieldset>
          {/* information of this payment method */}
          {/* <h4 className="">Informations of this payment method</h4> */}
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="cardnumber" value="Card Number" />
            </div>
            <TextInput
              id="cardnumber"
              type="text"
              placeholder="XXXX-YYYY-ZZZZ-AAAA"
              required
              onChange={(e) =>
                setpaymentinfo((previousState) => ({
                  ...previousState,
                  paymentcard: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <Label
              className="mb-2 block"
              htmlFor="nameoncard"
              value="Name on card"
            />
            <TextInput
              id="nameoncard"
              type="text"
              placeholder="Name"
              required
              onChange={(e) =>
                setpaymentinfo((previousState) => ({
                  ...previousState,
                  cardname: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex justify-between gap-3 mb-3">
            <div className="w-2/3">
              <Label className="mb-2 block" htmlFor="expire" value="expire" />
              <TextInput
                id="expire"
                type="text"
                placeholder=""
                required
                onChange={(e) =>
                  setpaymentinfo((previousState) => ({
                    ...previousState,
                    expire: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-1/3">
              <Label className="mb-2 block" htmlFor="CVC" value="CVC" />
              <TextInput
                id="CVC"
                type="text"
                placeholder=""
                required
                onChange={(e) =>
                  setpaymentinfo((previousState) => ({
                    ...previousState,
                    cvc: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </CheckoutPart>
        {/* Extras note */}
        <div className="max-w-md p-3 w-full">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Additional comment..."
            required
            rows={4}
            onChange={(e) => setextrainfo(e.target.value)}
          />
        </div>

        {/* Accept legacy term */}
        <div className="flex items-center gap-2 p-3">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button
          type="submit"
          onClick={() => {
            console.log(
              "get infos: **userinfo: ",
              userinfo,
              "\n **deliveryinfo: ",
              deliveryinfo,
              "\n **paymentinfo: ",
              paymentinfo,
              "\n **extrainfo: ",
              extrainfo
            );
            setopenpopsuccefull(true);
          }}
        >
          Confirm: Pay $1200
        </Button>

        {/* //Popup add to cart */}
        <Modal
          show={openpopsuccefull}
          size="md"
          onClose={() => setopenpopsuccefull(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <div className="flex justify-center items-center align-middle mb-5">
                <svg
                  width="2em"
                  height="2em"
                  fill="green"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                </svg>
              </div>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Payment sucefully done, thank you for purchase from us
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="green"
                  onClick={() => setopenpopsuccefull(false)}
                >
                  <a href="#">See the bill</a>
                </Button>
                <Button color="gray" onClick={() => setopenpopsuccefull(false)}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </form>
  );
}
