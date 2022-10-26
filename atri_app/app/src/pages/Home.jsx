import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex1Cb, useTextBox1Cb, useTextBox2Cb, useInput1Cb, useTextBox3Cb, useButton2Cb, useTextBox4Cb, useTextBox5Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()

  return (<>
  <Flex className="p-Home Flex1" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<TextBox className="p-Home TextBox1" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home TextBox2" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<Input className="p-Home Input1" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Button className="p-Home Button2" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<TextBox className="p-Home TextBox4" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox5" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
  </>);
}
