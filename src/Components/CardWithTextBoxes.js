import React, { useState } from "react";
import "./loader.css";
import axios from 'axios';

export default function CardSettings() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [showPredictionPopup, setShowPredictionPopup] = useState(false);
  const [manufacturerValue, setManufacturerValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [modelNameValue, setModelNameValue] = useState("");
  const [osValue, setOsValue] = useState("");
  const [osVersionValue, setOsVersionValue] = useState("10");
  const [screenTypeValue, setScreenTypeValue] = useState("");
  const [screenSizeValue, setScreenSizeValue] = useState("14.0");
  const [resolutionWidthValue, setResolutionWidthValue] = useState("");
  const [resolutionHeightValue, setResolutionHeightValue] = useState("");
  const [gpuValue, setGpuValue] = useState("");
  const [cpuModelValue, setCpuModelValue] = useState("");
  const [clockSpeedValue, setClockSpeedValue] = useState("");
  const [ramSizeValue, setRamSizeValue] = useState("");
  const [storageCapacityValue, setStorageCapacityValue] = useState("0");
  const [hddStorageCapacityValue, setHddStorageCapacityValue] = useState("0");
  const [ssdStorageCapacityValue, setSsdStorageCapacityValue] = useState("0");
  const [flashStorageCapacityValue, setFlashStorageCapacityValue] =
    useState("");
  const [hybridStorageCapacityValue, setHybridStorageCapacityValue] =
    useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [osOptions, setOsOptions] = useState([]);
  const [weightValue, setWeightValue] = useState("1.0");
  
  const manufacturerModels = {
    Apple: ["MacBook Pro", "MacBook Air", "MacBook 12"],
    HP: [
      "250 G6",
      "255 G6",
      "15-BS101nv (i7-8550U/8GB/256GB/FHD/W10)",
      "ProBook 470",
      "17-ak001nv (A6-9220/4GB/500GB/Radeon",
      "ProBook 450",
      "X751NV-TY001T (N4200/4GB/1TB/GeForce",
      "Stream 14-AX040wm",
      "V310-15ISK (i5-7200U/4GB/1TB/FHD/W10)",
      "Pavilion 15-CK000nv",
      "ProBook 440",
      "Probook 430",
      "Omen 15-ce007nv",
      "15-bs017nv (i7-7500U/8GB/256GB/Radeon",
      "15-bw000nv (E2-9000e/4GB/500GB/Radeon",
      "Envy 13-ad009n",
      "Pavilion 14-BK001nv",
      "Spectre x360",
      "Probook 440",
      "Probook 470",
      "15-BS078nr (i7-7500U/8GB/1TB/W10)",
      "Envy 13-AD007nv",
      "EliteBook Folio",
      "EliteBook 840",
      "15-BS103nv (i5-8250U/6GB/256GB/Radeon",
      "Omen 17-W295",
      "Pro P2540UA-XO0198T",
      "ROG GL703VD-GC028T",
      "Vivobook X541UV-DM1217T",
      "K756UX-T4340T (i5-7200U/8GB/500GB",
      "ROG G703VI-E5062T",
      "VivoBook Pro",
      "Envy 17-U275cl",
      "15-bs015dx (i5-7200U/8GB/1TB/W10)",
      "15-BW094nd (A6-9220/8GB/128GB/W10)",
      "17-BS037cl (i3-6006U/8GB/1TB/W10)",
      "EliteBook x360",
      "ProBook 640",
      "Elitebook 840",
      "Elitebook 820",
      "Elitebook 850",
      "Elitebook 1040",
      "Omen 17-w212nv",
      "EliteBook 1040",
      "Omen 17-w207nv",
      "Omen 15-AX205na",
      "Pro P2540UA-AB51",
      "Omen 17-an006nv",
      "Envy 13-AB002nv",
      "Probook 450",
      "Omen 15-ce006nv",
      "Omen 17-AN010nv",
      "Envy 13-AB020nr",
      "Pavilion 17-AK091ND (A9-9420/8GB/1TB/W10)",
      "15-ay047nv (i3-6006U/6GB/1TB/Radeon",
      "15-bs012nv (i7-7500U/8GB/1TB/Radeon",
      "Pavilion X360",
      "Pavilion 17-bs000nv I3",
      "Pavilion 17-Y002nv (A10-9600P/6GB/2TB/Radeon",
      "Chromebook 14",
      "17-ak002nv (A10-9620P/6GB/2TB/Radeon",
      "110-15ACL (A6-7310/4GB/500GB/W10)",
      "15-bs011nv (i7-7500U/4GB/500GB/Radeon",
      "15-BW037na (A9-9420/4GB/1TB/Radeon",
      "15-BW091ND (A9-9420/6GB/1TB",
      "ZBook 15",
      "Pro P2540UA-XO0192R",
      "Pro P2540UA-XS51",
      "Omen 17-an012dx",
      "15-cb003na (i5-7300HQ/8GB/1TB",
      "15-ba043na (A12-9700P/8GB/2TB/W10)",
      "R558UA-DM966T (i5-7200U/8GB/128GB/FHD/W10)",
      "Pavilion x360",
      "Probook 640",
      "Envy x360",
      "Envy 13-AB077cl",
      "Probook 650",
      "Omen 17-W006na",
      "ProBook x360",
      "ZBook Studio",
    ],
    Acer: [
      "Aspire 3",
      "Swift 3",
      "Aspire A515-51G",
      "Aspire E5-475",
      "Aspire A515-51G-32MX",
      "Aspire 5",
      "Spin 5",
      "Spin 3",
      "Aspire A515-51G-37JS",
      "Aspire A315-51",
      "Aspire A315-31",
      "Aspire A517-51G",
      "Aspire E5-576G",
      "Aspire 7",
      "Aspire R7",
      "Nitro AN515-51",
      "SP315-51 (i7-7500U/12GB/1TB/FHD/W10)",
      "Chromebook C910-C2ST",
      "ES1-523-84K7 (A8-7410/8GB/256GB/FHD/W10)",
      "Aspire A715-71G",
      "Aspire E5-575",
      "ES1-523-84K7 (A8-7410/8GB/256GB/FHD/W10)",
      "15-AY023na (N3710/8GB/2TB/W10)",
      "15-bw003nv (A9-Series-9420/4GB/256GB/FHD/W10)",
      "15-BW004nv (A9-9420/4GB/256GB/Radeon",
      "Aspire A515-51G-59QF",
      "Ideapad 520-15IKBR",
      "A541NA-GO342 (N3350/4GB/500GB/Linux)",
      "Aspire 1",
      "Chromebook 11",
      "Extensa EX2540",
      "Aspire VX5-591G",
      "Chromebook Flip",
      "Extensa EX2540-58KR",
      "TravelMate P238-M",
      "Predator G9-793",
      "N42-20 Chromebook",
      "Chromebook C731-C78G",
      "Chromebook CB5-571-C1DZ",
      "TravelMate P259-G2",
    ],
    Asus: [
      "ZenBook UX430UN",
      "Vivobook E200HA",
      "X540UA-DM186 (i3-6006U/4GB/1TB/FHD/Linux)",
      "X542UQ-GO005 (i5-7200U/8GB/1TB/GeForce",
      "Rog Strix",
      "VivoBook Max",
      "X541UA-DM1897 (i3-6006U/4GB/256GB/FHD/Linux)",
      "UX410UA-GV350T (i5-8250U/8GB/256GB/FHD/W10)",
      "ZenBook Pro",
      "Zenbook UX430UA",
      "X541UV-DM1439T (i3-7100U/6GB/256GB/GeForce",
      "UX430UQ-GV209R (i7-7500U/8GB/256GB/GeForce",
      "VivoBook S15",
      "X705UV-BX074T (i3-6006U/4GB/1TB/GeForce",
      "ZenBook UX430UA",
      "ZenBook Flip",
      "F756UX-T4201D (i7-7500U/8GB/128GB",
      "Rog G701VIK-BA060T",
      "ROG G752VSK-GC493T",
      "X505BP-BR019T (A9-9420/4GB/1TB/Radeon",
      "FX753VD-GC071T (i7-7700HQ/8GB/1TB/GeForce",
      "ZenBook UX530UQ-PRO",
      "VivoBook S14",
      "VivoBook Flip",
      "ZenBook UX410UA-GV183T",
      "UX510UX-CN269T (i7-7500U/8GB/256GB",
      "GL553VE-FY082T (i7-7700HQ/8GB/1TB",
      "Zenbook UX410UA-GV027T",
      "Zenbook 3",
      "X542UQ-DM117 (i3-7100U/8GB/1TB/GeForce",
      "X541NA-PD1003Y (N4200/4GB/500GB/W10)",
      "Zenbook UX390UA",
      "Zenbook UX510UX-CN211T",
      "ROG G752VL-UH71T",
      "Zenbook UX510UW-FI095T",
      "VivoBook X540YA-XX519T",
      "TP501UA-CJ131T (i5-7200U/8GB/1TB/W10)",
      "ZenBook 3",
      "ROG GL553VE-FY022",
      "ROG G701VI",
      "Zenbook UX330UA-AH5Q",
      "Vivobook Max",
      "Q524UQ-BHI7T15 (i7-7500U/12GB/2TB/GeForce",
      "R417NA-RS01 (N3350/4GB/32GB/W10)",
      "Blade Stealth",
      "GL62M 7RD",
      "Rog GL702VS-BA023T",
      "Rog GL702VM-GC017T",
      "Rog GL502VM-DS74",
      "VivoBook L402NA",
      "ZenBook UX310UQ-GL026T",
      "X541NA (N4200/4GB/1TB/W10)",
      "X541NA-GO121 (N4200/4GB/1TB/Linux)",
      "X751SV-TY001T (N3710/4GB/1TB/GeForce",
      "Aspire F5-573G-510L",
      "Chromebook C738T-C2EJ",
    ],
    Dell: [
      "Inspiron 3567",
      "Inspiron 5379",
      "Inspiron 5570",
      "XPS 13",
      "Latitude 5590",
      "Inspiron 5770",
      "Inspiron 7577",
      "Inspiron 7773",
      "Inspiron 3576",
      "Vostro 5471",
      "Inspiron 5370",
      "Inspiron 7570",
      "Inspiron 5567",
      "Inspiron 5577",
      "Inspiron 7567",
      "Inspiron 5579",
      "XPS 15",
      "Precision 7520",
      "Latitude 5490",
      "Vostro 5468",
      "Alienware 17",
      "Vostro 5370",
      "Vostro 3568",
      "Precision 7720",
      "Latitude 7480",
      "Zbook 15",
      "Precision 3510",
      "Precision 5520",
      "Precision M5520",
      "Latitude 3380",
      "Latitude 5480",
      "Precision 3520",
      "Latitude 7390",
      "Latitude E5470",
      "Latitude 5580",
      "Vostro 5568",
      "17-X047na (i3-6006U/8GB/1TB/W10)",
      "Latitude 5289",
      "Inspiron 7559",
      "Latitude E7470",
      "Latitude 3580",
      "Latitude E7470",
      "Inspiron 7560",
      "Latitude 7280",
      "Latitude 3180",
      "Inspiron 5767",
      "Inspiron 5368",
      "Insprion 5767",
    ],
    Lenovo: [
      "IdeaPad 320-15IKB",
      "Legion Y520-15IKBN",
      "IdeaPad 120S-14IAP",
      "IdeaPad 320-15ISK",
      "IdeaPad 520S-14IKB",
      "Yoga Book",
      "IdeaPad 320-15IKBN",
      "IdeaPad 320-15AST",
      "Ideapad 310-15ISK",
      "Thinkpad T470",
      "ThinkPad Yoga",
      "V110-15IAP (N3350/4GB/1TB/No",
      "ThinkPad E480",
      "V110-15IKB (i5-7200U/4GB/128GB/W10)",
      "Yoga 520-14IKB",
      "V310-15IKB (i5-7200U/8GB/1TB",
      "Yoga 920-13IKB",
      "V110-15ISK (i5-6200U/4GB/128GB/W10)",
      "Thinkpad Yoga",
      "Yoga 910-13IKB",
      "Yoga 720-15IKB",
      "V330-15IKB (i7-8550U/8GB/256GB/FHD/W10)",
      "ThinkPad X1",
      "Thinkpad T570",
      "V330-15IKB (i5-8250U/8GB/256GB/FHD/W10)",
      "IdeaPad 310-15ABR",
      "IdeaPad 320-15IAP",
      "IdeaPad 720S-13IKB",
      "ThinkPad 13",
      "V310-15ISK (i3-6006U/4GB/1TB/FHD/W10)",
      "IdeaPad 320-15ABR",
      "TravelMate B",
      "IdeaPad 110-17ACL",
      "V310-15ISK (i3-6006U/4GB/128GB/FHD/No",
      "IdeaPad 720S-14IKB",
      "ThinkPad X1",
      "Ideapad 510S-13IKB",
      "ThinkPad E580",
      "ThinkPad L470",
      "Lenovo IdeaPad",
      "ThinkPad P51",
      "Thinkpad T470p",
      "Thinkpad P51",
      "Thinkpad T470s",
      "ThinkPad X270",
      "IdeaPad 320s-14IKB",
      "ThinkPad T470",
      "IdeaPad 510s-14IKB",
      "Thinkpad T460s",
      "ThinkPad E570",
      "Thinkpad X270",
      "Thinkpad X260",
      "ThinkPad L570",
      "ThinkPad E570",
      "Thinkpad E470",
      "ThinkPad T570",
      "V310-15ISK (i5-6200U/4GB/1TB/FHD/No",
      "V330-15IKB (i3-7130U/4GB/128GB/FHD/W10)",
      "V330-15IKB (i5-8250U/4GB/500GB/FHD/W10)",
      "IdeaPad Y910-17ISK",
      "Ideapad 320-15IKBR",
      "IdeaPad 110-15ISK",
      "IdeaPad 310-15IKB",
      "V330-15IKB (i5-8250U/4GB/256GB/FHD/W10)",
      "Ideapad 320-15ISK",
      "Ideapad 320-15IAP",
      "IdeaPad 100S-14IBR",
      "IdeaPad Y700-15ISK",
      "V310-15ISK (i5-7200U/8GB/1TB)",
      "Yoga 720-13IKB",
      "Yoga 730",
      "ThinkPad P51s",
      "Thinkpad T460p",
      "V310-15IKB (i5-7200U/4GB/1TB/FHD/W10)",
      "V310-15IKB (i3-6006U/4GB/500GB/No)",
      "V310-15IKB (i5-7200U/4GB/1TB/No",
      "V310-15IKB (i7-7500U/4GB/1TB/FHD/W10)",
      "Flex 5",
      "Thinkpad T460",
      "Thinkpad P50",
      "IdeaPad 110-15IBR",
      "Yoga 510-15IKB",
      "Thinkpad T470s",
      "ThinkPad T470p",
      "IdeaPad 510-15ISK",
      "IdeaPad 510-15IKB",
      "Yoga 700-11ISK",
      "IdeaPad Y700-15ACZ",
      "ThinkPad T460",
    ],
    Chuwi: [
      'LapBook 15.6"',
      "E402WA-GA007T (E2-6110/4GB/64GB/W10",
      "X541NA (N3350/4GB/1TB/FHD/W10)",
      "K147 (N3350/4GB/32GB/FHD/W10)",
      "LapBook 12.3",
      "FlexBook Edge",
      "Lapbook 15,6",
      "SmartBook Edge",
    ],
    MSI: [
      "GS73VR 7RG",
      "FX753VE-GC093 (i7-7700HQ/12GB/1TB/GeForce",
      "GL72M 7RDX",
      "FX503VD-E4022T (i7-7700HQ/8GB/1TB/GeForce",
      "FX503VM-E4007T (i7-7700HQ/16GB/1TB",
      "FX550IK-DM018T (FX-9830P/8GB/1TB/Radeon",
      "GP62M 7REX",
      "GS63VR 7RG",
      "GE72MVR 7RG",
      "GE73VR 7RE",
      "GE63VR 7RE",
      "GT80S 6QF-074US",
      "GT73EVR 7RE",
      "Rog GL702VS-GC095T",
      "GL72M 7REX",
      "FX553VD-FY647T (i7-7700HQ/8GB/256GB/GeForce",
      "GP72MVR 7RFX",
      "Leopard GP72M",
      "GE73VR 7RF",
      "GV62 7RD-1686NL",
      "FX753VD-GC461T (i7-7700HQ/16GB/1TB)",
      "GS63VR 7RF",
      "GT62VR 7RE",
      "GL62M 7REX",
      "GP72VR Leopard",
      "GP62 7RDX",
      "GV62M 7RD",
      "GS43VR 7RE",
      "GL62M (i5-7300HQ/8GB/1TB",
      "FX502VM-DM560T (i7-7700HQ/8GB/1TB",
      "Rog G752VS-BA171T",
      "GS73VR Stealth",
      "GE72VR 6RF",
      "GP62M Leopard",
    ],
    Microsoft: ["Surface Laptop"],
    Toshiba: [
      "Portege Z30-C-16L",
      "Tecra A50-C-21G",
      "Portege Z30-C-16P",
      "Portege X30-D-10J",
      "Portege X30-D-10L",
      "Tecra X40-D-10H",
      "Tecra Z50-C-144",
      "Tecra Z50-D-10E",
      "Tecra A50-D-11M",
      "Portege Z30-C-16J",
      "Portege Z30T-C-133",
      "Tecra X40-D-10G",
      "Tecra A40-C-1E5",
      "Tecra Z40-C-161",
      "Tecra X40-D-10Z",
      "Portege X30-D-10X",
      "Portégé Z30-C-188",
      "Tecra A50-D-11D",
      "Portege X30-D-10V",
      "Tecra Z50-C-140",
      "Tecra Z40-C-12X",
      "Tecra A50-C-1ZV",
      "Portege Z30-C-1CW",
      "Portege Z30-C-16Z",
      "Portege X20W-D-10V",
      "Tecra A40-C-1DF",
    ],
    Huawei: ["MateBook X"],
    Xiaomi: ["Mi Notebook"],
    Razer: ["Blade Pro"],
    Samsung: [
      "Chromebook 3",
      "Chromebook N23",
      "Notebook 9",
      "N23 (N3060/4GB/128GB/W10)",
    ],
    Google: ["Pixelbook (Core"],
    Fujitsu: ["Lifebook A557"],
    LG: ["Gram 15Z975", "Gram 15Z970", "Gram 14Z970"],
  };

  const manufacturerOSOptions = {
    Apple: ["macOS", "No OS"],
    HP: ["Windows", "Linux", "No OS"],
    Acer: ["Windows", "Linux", "No OS"],
    Asus: ["Windows", "Linux", "No OS"],
    Dell: ["Windows", "Linux", "No OS"],
    Lenovo: ["Windows", "Linux", "No OS"],
    Chuwi: ["Windows", "Linux", "No OS"],
    MSI: ["Windows", "Linux", "No OS"],
    Microsoft: ["Windows", "Linux", "No OS"],
    Toshiba: ["Windows", "Linux", "No OS"],
    Huawei: ["Windows", "Linux", "Android", "No OS"],
    Xiaomi: ["Windows", "Linux", "Android", "No OS"],
    Razer: ["Windows", "Linux", "No OS"],
    Samsung: ["Windows", "Linux", "Android", "Chrome OS", "No OS"],
    Google: ["Windows", "Linux", "Android", "Chrome OS", "No OS"],
    Fujitsu: ["Windows", "Linux", "No OS"],
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleManufacturerChange = (event) => {
    const selectedManufacturer = event.target.value;
    setSelectedManufacturer(event.target.value);
    setManufacturerValue(selectedManufacturer);
    const models = manufacturerModels[selectedManufacturer] || [];
    setAvailableModels(models);
    handleOsChange(selectedManufacturer);
    setModelNameValue("");
  };

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleModelNameChange = (event) => {
    setModelNameValue(event.target.value);
  };

  const handleOsChange = (manufacturer) => {
    const options = manufacturerOSOptions[manufacturer] || [];
    setOsOptions(options);
    setOsValue("");
  };

  const handleOsVersionChange = (event) => {
    setOsVersionValue(event.target.value);
  };

  const handleScreenTypeChange = (event) => {
    setScreenTypeValue(event.target.value);
  };

  const handleScreenSizeChange = (event) => {
    setScreenSizeValue(event.target.value);
  };

  const handleResolutionWidthChange = (event) => {
    setResolutionWidthValue(event.target.value);
  };

  const handleResolutionHeightChange = (event) => {
    setResolutionHeightValue(event.target.value);
  };

  const handleGpuChange = (event) => {
    setGpuValue(event.target.value);
  };

  const handleCpuModelChange = (event) => {
    setCpuModelValue(event.target.value);
  };

  const handleClockSpeedChange = (event) => {
    setClockSpeedValue(event.target.value);
  };

  const handleRamSizeChange = (event) => {
    setRamSizeValue(event.target.value);
  };

  const handleStorageCapacityChange = (event) => {
    setStorageCapacityValue(event.target.value);
  };

  const handleHddStorageCapacityChange = (event) => {
    setHddStorageCapacityValue(event.target.value);
  };

  const handleSsdStorageCapacityChange = (event) => {
    setSsdStorageCapacityValue(event.target.value);
  };

  const handleFlashStorageCapacityChange = (event) => {
    setFlashStorageCapacityValue(event.target.value);
  };

  const handleHybridStorageCapacityChange = (event) => {
    setHybridStorageCapacityValue(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeightValue(event.target.value);
  };


const fetchData = async (requestBody) => {
  try {
    //const response = await axios.post('http://localhost:5000/predict', requestBody);
    const response = await axios.post('https://jthlkvevyvukfiop.l.tunwg.com/predict', requestBody);
      const predictionData = await response.data.prediction;
      setPredictedPrice(predictionData);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};





  const handleConfirmButtonClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loader = document.querySelector(".loader");
    if (loader) {
      loader.style.borderTopColor = "blue";
      loader.style.borderRightColor = "blue";
      loader.style.borderBottomColor = "blue";
      loader.style.borderLeftColor = "blue";
    }

    const formDataArray = [
      manufacturerValue,
      categoryValue,
      modelNameValue,
      osValue,
      osVersionValue,
      screenTypeValue,
      screenSizeValue,
      resolutionWidthValue,
      resolutionHeightValue,
      gpuValue,
      cpuModelValue,
      clockSpeedValue,
      ramSizeValue,
      hddStorageCapacityValue,
      ssdStorageCapacityValue,
      weightValue,
      flashStorageCapacityValue,
      hybridStorageCapacityValue,
    ];

    console.log(formDataArray);

    const storageTotal = hddStorageCapacityValue + ssdStorageCapacityValue;

  const requestBody = {
    'Manufacturer': [formDataArray[0]],
    'Category': [formDataArray[1]],
    'Model Name': [formDataArray[2]],
    'Operating System': [formDataArray[3]],
    'Operating System Version': [formDataArray[4]],
    'Screen Type': [formDataArray[5]],
    'Screen Size': [parseFloat(formDataArray[6])],
    'Resolution Width': [parseFloat(formDataArray[7])],
    'Resolution Height': [parseFloat(formDataArray[8])],
    'GPU': [formDataArray[9]],
    'CPU Model': [formDataArray[10]],
    'Clock Speed': [parseFloat(formDataArray[11])],
    'RAM': [parseInt(formDataArray[12])],
    'SSD Storage': [parseFloat(formDataArray[14])],
    'Weight': [parseFloat(formDataArray[15])],
    'Total Storage': [storageTotal],
  };

    fetchData(requestBody);

    setTimeout(() => {
      setIsLoading(false);
      setShowPredictionPopup(true);
    }, 2000);
  };

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/onnxjs/dist/onnx.min.js"></script>
      <div className="flex flex-col justify-center items-center p-4 opacity-100">
        <div className="relative flex flex-col min-w-0 break-words w-full">
          <div className="mb-9 px-6 py-6 text-center">
            <h6
              style={{ fontSize: "30px" }}
              className="text-white text-xl font-bold"
            >
              Provide Specifications
            </h6>
          </div>

          <div className="flex flex-col justify-center items-center px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleConfirmButtonClick}>
              <div className="flex items-center flex-wrap justify-center">
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="storage"
                    >
                      Manufacturer
                    </label>
                    <select
                      id="storage"
                      name="storage"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleManufacturerChange}
                      required
                    >
                      <option value="">Select Manufacturer</option>
                      <option value="Apple">Apple</option>
                      <option value="HP">HP</option>
                      <option value="Acer">Acer</option>
                      <option value="Asus">Asus</option>
                      <option value="Dell">Dell</option>
                      <option value="Lenovo">Lenovo</option>
                      <option value="Chuwi">Chuwi</option>
                      <option value="MSI">MSI</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Toshiba">Toshiba</option>
                      <option value="Huawei">Huawei</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="Razer">Razer</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Google">Google</option>
                      <option value="Fujitsu">Fujitsu</option>
                      <option value="LG">LG</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="storage"
                    >
                      Category
                    </label>
                    <select
                      id="catagory"
                      name="catagory"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Ultrabook">Ultrabook</option>
                      <option value="Notebook">Notebook</option>
                      <option value="Netbook">Netbook</option>
                      <option value="Gaming">Gaming</option>
                      <option value="2 in 1 Convertible">
                        2 in 1 Convertible
                      </option>
                      <option value="Workstation">Workstation</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Model Name
                    </label>
                    <select
                      type="text"
                      id="manufacturer"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                      value={modelNameValue}
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleModelNameChange}
                      required
                    >
                      <option value="">Select Model</option>
                      {availableModels.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="storage"
                    >
                      Operating System
                    </label>
                    <select
                      id="OS"
                      name="OS"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      value={osValue}
                      onChange={(e) => setOsValue(e.target.value)}
                      required
                    >
                      <option value="">Select Operating System</option>
                      {osOptions.map((os) => (
                        <option key={os} value={os}>
                          {os}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-1"
                      htmlFor="os_version"
                    >Operating System Version
                    </label>
                    <div
                      style={{ color: "white"}}
                      onChange={handleOsVersionChange}
                      className="flex items-center space-x-4"
                    >
                      {osValue === "Windows" && (
                        <>
                          <input
                            type="radio"
                            id="os_10"
                            name="os_version"
                            value="10"
                          />
                          <label htmlFor="os_10" className="radio-button">
                            Win 10
                          </label>

                          <input
                            type="radio"
                            id="os_10S"
                            name="os_version"
                            value="10 S"
                          />
                          <label htmlFor="os_10S" className="radio-button">
                            Win 10S
                          </label>

                          <input
                            type="radio"
                            id="os_7"
                            name="os_version"
                            value="7"
                          />
                          <label htmlFor="os_7" className="radio-button">
                            Win 7
                          </label>
                        </>
                      )}
                      {osValue === "Android" && (
                        <>
                          <input
                            type="radio"
                            id="os_X"
                            name="os_version"
                            value="X"
                          />
                          <label htmlFor="os_X" className="radio-button">
                            X
                          </label>
                        </>
                      )}
                      
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Screen Type
                    </label>
                    <select
                      type="text"
                      id="manufacturer"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleScreenTypeChange}
                      required
                    >
                      <option value="">Select Screen Type</option>
                      <option value="">None</option>
                      <option value="IPS Panel Retina Display">IPS Panel Retina Display</option>
                      <option value="Full HD">Full HD</option>
                      <option value="IPS Panel Full HD">IPS Panel Full HD</option>
                      <option value="IPS Panel Full HD / Touchscreen">IPS Panel Full HD / Touchscreen</option>
                      <option value="Full HD / Touchscreen">Full HD / Touchscreen</option>
                      <option value="Touchscreen / Quad HD+">Touchscreen / Quad HD+</option>
                      <option value="IPS Panel Touchscreen">IPS Panel Touchscreen</option>
                      <option value="Touchscreen">Touchscreen</option>
                      <option value="Quad HD+ / Touchscreen">Quad HD+ / Touchscreen</option>
                      <option value="IPS Panel">IPS Panel</option>
                      <option value="IPS Panel 4K Ultra HD / Touchscreen">IPS Panel 4K Ultra HD / Touchscreen</option>
                      <option value="4K Ultra HD / Touchscreen">4K Ultra HD / Touchscreen</option>
                      <option value="IPS Panel 4K Ultra HD">IPS Panel 4K Ultra HD</option>
                      <option value="4K Ultra HD">4K Ultra HD</option>
                      <option value="IPS Panel Quad HD+">IPS Panel Quad HD+</option>
                      <option value="IPS Panel Quad HD+ / Touchscreen">IPS Panel Quad HD+ / Touchscreen</option>
                      <option value="IPS Panel Touchscreen / 4K Ultra HD">IPS Panel Touchscreen / 4K Ultra HD</option>
                      <option value="Touchscreen / Full HD">Touchscreen / Full HD</option>
                      <option value="Quad HD+">Quad HD+</option>
                      <option value="Touchscreen / 4K Ultra HD">Touchscreen / 4K Ultra HD</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Screen Size : &nbsp; <span style={{color:"white"}} id="currentValue">{screenSizeValue ? screenSizeValue : 14.0}</span> &nbsp; in
                    </label>
                    <input
                      type="range"
                      id="screen-size"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="14.0"
                      min="10.0"
                      max="18.0"
                      step="0.1"
                      style={{ backgroundColor: "#1D2432"}}
                      onChange={handleScreenSizeChange}
                      required
                    />
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Weight : &nbsp; <span style={{color:"white"}} id="currentValue">{weightValue ? weightValue : 1.0}</span> &nbsp; kg
                    </label>
                    <input
                      type="range"
                      id="weight"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="1.0"
                      min="0.5"
                      max="3.5"
                      step="0.1"
                      style={{ backgroundColor: "#1D2432"}}
                      onChange={handleWeightChange}
                      required
                    />
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Resolution Width
                    </label>
                    <select
                      type="text"
                      id="resolution-width"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleResolutionWidthChange}
                      required
                    >
                      <option value="">Select Resolution Width</option>
                      <option value="2560">2560</option>
                      <option value="1440">1440</option>
                      <option value="1920">1920</option>
                      <option value="2880">2880</option>
                      <option value="1366">1366</option>
                      <option value="2304">2304</option>
                      <option value="3200">3200</option>
                      <option value="2256">2256</option>
                      <option value="3840">3840</option>
                      <option value="2160">2160</option>
                      <option value="1600">1600</option>
                      <option value="2736">2736</option>
                      <option value="2400">2400</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Resolution Height
                    </label>
                    <select
                      type="text"
                      id="resolution-height"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleResolutionHeightChange}
                      required
                    >
                      <option value="">Select Resolution Height</option>
                      <option value="1600">1600</option>
                      <option value="900">900</option>
                      <option value="1080">1080</option>
                      <option value="1800">1800</option>
                      <option value="768">768</option>
                      <option value="1440">1440</option>
                      <option value="1200">1200</option>
                      <option value="1504">1504</option>
                      <option value="2160">2160</option>
                      <option value="1824">1824</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="gpu"
                    >
                      GPU
                    </label>
                    <select
                      id="gpu"
                      name="gpu"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleGpuChange}
                      required
                    >
                      <option value="">Select GPU</option>
                      <option value="Intel Iris Plus Graphics 640">
                        Intel Iris Plus Graphics 640
                      </option>
                      <option value="Intel HD Graphics 6000">
                        Intel HD Graphics 6000
                      </option>
                      <option value="Intel HD Graphics 620">
                        Intel HD Graphics 620
                      </option>
                      <option value="AMD Radeon Pro 455">
                        AMD Radeon Pro 455
                      </option>
                      <option value="Intel Iris Plus Graphics 650">
                        Intel Iris Plus Graphics 650
                      </option>
                      <option value="AMD Radeon R5">AMD Radeon R5</option>
                      <option value="Intel Iris Pro Graphics">
                        Intel Iris Pro Graphics
                      </option>
                      <option value="Nvidia GeForce MX150">
                        Nvidia GeForce MX150
                      </option>
                      <option value="Intel UHD Graphics 620">
                        Intel UHD Graphics 620
                      </option>
                      <option value="Intel HD Graphics 520">
                        Intel HD Graphics 520
                      </option>
                      <option value="AMD Radeon Pro 555">
                        AMD Radeon Pro 555
                      </option>
                      <option value="AMD Radeon R5 M430">
                        AMD Radeon R5 M430
                      </option>
                      <option value="Intel HD Graphics 615">
                        Intel HD Graphics 615
                      </option>
                      <option value="AMD Radeon Pro 560">
                        AMD Radeon Pro 560
                      </option>
                      <option value="Nvidia GeForce 940MX">
                        Nvidia GeForce 940MX
                      </option>
                      <option value="Intel HD Graphics 400">
                        Intel HD Graphics 400
                      </option>
                      <option value="Nvidia GeForce GTX 1050">
                        Nvidia GeForce GTX 1050
                      </option>
                      <option value="AMD Radeon R2">AMD Radeon R2</option>
                      <option value="AMD Radeon 530">AMD Radeon 530</option>
                      <option value="Nvidia GeForce 930MX">
                        Nvidia GeForce 930MX
                      </option>
                      <option value="Intel HD Graphics">
                        Intel HD Graphics
                      </option>
                      <option value="Intel HD Graphics 500">
                        Intel HD Graphics 500
                      </option>
                      <option value="Nvidia GeForce 930MX">
                        Nvidia GeForce 930MX
                      </option>
                      <option value="Nvidia GeForce GTX 1060">
                        Nvidia GeForce GTX 1060
                      </option>
                      <option value="Nvidia GeForce 150MX">
                        Nvidia GeForce 150MX
                      </option>
                      <option value="Intel Iris Graphics 540">
                        Intel Iris Graphics 540
                      </option>
                      <option value="AMD Radeon RX 580">
                        AMD Radeon RX 580
                      </option>
                      <option value="Nvidia GeForce 920MX">
                        Nvidia GeForce 920MX
                      </option>
                      <option value="AMD Radeon R4 Graphics">
                        AMD Radeon R4 Graphics
                      </option>
                      <option value="AMD Radeon 520">AMD Radeon 520</option>
                      <option value="Nvidia GeForce GTX 1070">
                        Nvidia GeForce GTX 1070
                      </option>
                      <option value="Nvidia GeForce GTX 1050 Ti">
                        Nvidia GeForce GTX 1050 Ti
                      </option>
                      <option value="Nvidia GeForce MX130">
                        Nvidia GeForce MX130
                      </option>
                      <option value="AMD R4 Graphics">AMD R4 Graphics</option>
                      <option value="Nvidia GeForce GTX 940MX">
                        Nvidia GeForce GTX 940MX
                      </option>
                      <option value="AMD Radeon RX 560">
                        AMD Radeon RX 560
                      </option>
                      <option value="Nvidia GeForce 920M">
                        Nvidia GeForce 920M
                      </option>
                      <option value="AMD Radeon R7 M445">
                        AMD Radeon R7 M445
                      </option>
                      <option value="AMD Radeon RX 550">
                        AMD Radeon RX 550
                      </option>
                      <option value="Nvidia GeForce GTX 1050M">
                        Nvidia GeForce GTX 1050M
                      </option>
                      <option value="Intel HD Graphics 515">
                        Intel HD Graphics 515
                      </option>
                      <option value="AMD Radeon R5 M420">
                        AMD Radeon R5 M420
                      </option>
                      <option value="Intel HD Graphics 505">
                        Intel HD Graphics 505
                      </option>
                      <option value="Nvidia GTX 980 SLI">
                        Nvidia GTX 980 SLI
                      </option>
                      <option value="AMD R17M-M1-70">AMD R17M-M1-70</option>
                      <option value="Nvidia GeForce GTX 1080">
                        Nvidia GeForce GTX 1080
                      </option>
                      <option value="Nvidia Quadro M1200">
                        Nvidia Quadro M1200
                      </option>
                      <option value="Nvidia GeForce 920MX ">
                        Nvidia GeForce 920MX
                      </option>
                      <option value="Nvidia GeForce GTX 950M">
                        Nvidia GeForce GTX 950M
                      </option>
                      <option value="AMD FirePro W4190M">
                        AMD FirePro W4190M
                      </option>
                      <option value="Nvidia GeForce GTX 980M">
                        Nvidia GeForce GTX 980M
                      </option>
                      <option value="Intel Iris Graphics 550">
                        Intel Iris Graphics 550
                      </option>
                      <option value="Nvidia GeForce 930M">
                        Nvidia GeForce 930M
                      </option>
                      <option value="Intel HD Graphics 630">
                        Intel HD Graphics 630
                      </option>
                      <option value="AMD Radeon R5 430">
                        AMD Radeon R5 430
                      </option>
                      <option value="Nvidia GeForce GTX 940M">
                        Nvidia GeForce GTX 940M
                      </option>
                      <option value="Intel HD Graphics 510">
                        Intel HD Graphics 510
                      </option>
                      <option value="Intel HD Graphics 405">
                        Intel HD Graphics 405
                      </option>
                      <option value="AMD Radeon RX 540">
                        AMD Radeon RX 540
                      </option>
                      <option value="Nvidia GeForce GT 940MX">
                        Nvidia GeForce GT 940MX
                      </option>
                      <option value="AMD FirePro W5130M">
                        AMD FirePro W5130M
                      </option>
                      <option value="Nvidia Quadro M2200M">
                        Nvidia Quadro M2200M
                      </option>
                      <option value="AMD Radeon R4">AMD Radeon R4</option>
                      <option value="Nvidia Quadro M620">
                        Nvidia Quadro M620
                      </option>
                      <option value="AMD Radeon R7 M460">
                        AMD Radeon R7 M460
                      </option>
                      <option value="Intel HD Graphics 530">
                        Intel HD Graphics 530
                      </option>
                      <option value="Nvidia GeForce GTX 965M">
                        Nvidia GeForce GTX 965M
                      </option>
                      <option value="Nvidia GeForce GTX1080">
                        Nvidia GeForce GTX1080
                      </option>
                      <option value="Nvidia GeForce GTX1050 Ti">
                        Nvidia GeForce GTX1050 Ti
                      </option>
                      <option value="Nvidia GeForce GTX 960M">
                        Nvidia GeForce GTX 960M
                      </option>
                      <option value="AMD Radeon R2 Graphics">
                        AMD Radeon R2 Graphics
                      </option>
                      <option value="Nvidia Quadro M620M">
                        Nvidia Quadro M620M
                      </option>
                      <option value="Nvidia GeForce GTX 970M">
                        Nvidia GeForce GTX 970M
                      </option>
                      <option value="Nvidia GeForce GTX 960Μ">
                        Nvidia GeForce GTX 960Μ
                      </option>
                      <option value="Intel Graphics 620">
                        Intel Graphics 620
                      </option>
                      <option value="Nvidia GeForce GTX 960">
                        Nvidia GeForce GTX 960
                      </option>
                      <option value="AMD Radeon R5 520">
                        AMD Radeon R5 520
                      </option>
                      <option value="AMD Radeon R7 M440">
                        AMD Radeon R7 M440
                      </option>
                      <option value="AMD Radeon R7">AMD Radeon R7</option>
                      <option value="Nvidia Quadro M520M">
                        Nvidia Quadro M520M
                      </option>
                      <option value="Nvidia Quadro M2200">
                        Nvidia Quadro M2200
                      </option>
                      <option value="Nvidia Quadro M2000M">
                        Nvidia Quadro M2000M
                      </option>
                      <option value="Intel HD Graphics 540">
                        Intel HD Graphics 540
                      </option>
                      <option value="Nvidia Quadro M1000M">
                        Nvidia Quadro M1000M
                      </option>
                      <option value="AMD Radeon 540">AMD Radeon 540</option>
                      <option value="Nvidia GeForce GTX 1070M">
                        Nvidia GeForce GTX 1070M
                      </option>
                      <option value="Nvidia GeForce GTX1060">
                        Nvidia GeForce GTX1060
                      </option>
                      <option value="Intel HD Graphics 5300">
                        Intel HD Graphics 5300
                      </option>
                      <option value="AMD Radeon R5 M420X">
                        AMD Radeon R5 M420X
                      </option>
                      <option value="AMD Radeon R7 Graphics">
                        AMD Radeon R7 Graphics
                      </option>
                      <option value="Nvidia GeForce 920">
                        Nvidia GeForce 920
                      </option>
                      <option value="Nvidia GeForce 940M">
                        Nvidia GeForce 940M
                      </option>
                      <option value="Nvidia GeForce GTX 930MX">
                        Nvidia GeForce GTX 930MX
                      </option>
                      <option value="AMD Radeon R7 M465">
                        AMD Radeon R7 M465
                      </option>
                      <option value="AMD Radeon R3">AMD Radeon R3</option>
                      <option value="Nvidia GeForce GTX 1050Ti">
                        Nvidia GeForce GTX 1050Ti
                      </option>
                      <option value="AMD Radeon R7 M365X">
                        AMD Radeon R7 M365X
                      </option>
                      <option value="AMD Radeon R9 M385">
                        AMD Radeon R9 M385
                      </option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="cpu"
                    >
                      CPU
                    </label>
                    <select
                      id="cpu"
                      name="cpu"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleCpuModelChange}
                      required
                    >
                      <option value="">Select CPU</option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="Intel Core i5 7200U">
                        Intel Core i5 7200U
                      </option>
                      <option value="Intel Core i7">
                        Intel Core i7
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="AMD A9-Series 9420">
                        AMD A9-Series 9420
                      </option>
                      <option value="Intel Core i7">
                        Intel Core i7
                      </option>
                      <option value="Intel Core i7 8550U ">
                        Intel Core i7 8550U
                      </option>
                      <option value="Intel Core i5 8250U">
                        Intel Core i5 8250U
                      </option>
                      <option value="Intel Core i3 6006U">
                        Intel Core i3 6006U
                      </option>
                      <option value="Intel Core i7">
                        Intel Core i7
                      </option>
                      <option value="Intel Core M m3">
                        Intel Core M m3
                      </option>
                      <option value="Intel Core i7 7500U">
                        Intel Core i7 7500U
                      </option>
                      <option value="Intel Core i7">
                        Intel Core i7
                      </option>
                      <option value="Intel Core i3 7100U">
                        Intel Core i3 7100U
                      </option>
                      <option value="Intel Atom x5-Z8350">
                        Intel Atom x5-Z8350
                      </option>
                      <option value="Intel Core i5 7300HQ">
                        Intel Core i5 7300HQ 
                      </option>
                      <option value="AMD E-Series E2-9000e">
                        AMD E-Series E2-9000e
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="Intel Core i7 8650U">
                        Intel Core i7 8650U
                      </option>
                      <option value="Intel Atom x5-Z8300">
                        Intel Atom x5-Z8300
                      </option>
                      <option value="AMD E-Series E2-6110">
                        AMD E-Series E2-6110
                      </option>
                      <option value="AMD A6-Series 9220">
                        AMD A6-Series 9220
                      </option>
                      <option value="Intel Celeron Dual Core N3350">
                        Intel Celeron Dual Core N3350
                      </option>
                      <option value="Intel Core i3 7130U">
                        Intel Core i3 7130U
                      </option>
                      <option value="Intel Core i7 7700HQ">
                        Intel Core i7 7700HQ
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="AMD Ryzen 1700">
                        AMD Ryzen 1700
                      </option>
                      <option value="Intel Pentium Quad Core N4200">
                        Intel Pentium Quad Core N4200
                      </option>
                      <option value="Intel Atom x5-Z8550">
                        Intel Atom x5-Z8550
                      </option>
                      <option value="Intel Celeron Dual Core N3060">
                        Intel Celeron Dual Core N3060
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="AMD FX 9830P">
                        AMD FX 9830P
                      </option>
                      <option value="Intel Core i7 7560U">
                        Intel Core i7 7560U
                      </option>
                      <option value="AMD E-Series 6110">
                        AMD E-Series 6110
                      </option>
                      <option value="Intel Core i5 6200U">
                        Intel Core i5 6200U
                      </option>
                      <option value="Intel Core M 6Y75">
                        Intel Core M 6Y75
                      </option>
                      <option value="Intel Core i5 7500U">
                        Intel Core i5 7500U
                      </option>
                      <option value="Intel Core i3 6006U">
                        Intel Core i3 6006U
                      </option>
                      <option value="AMD A6-Series 9220">
                        AMD A6-Series 9220
                      </option>
                      <option value="Intel Core i7 6920HQ">
                        Intel Core i7 6920HQ
                      </option>
                      <option value="Intel Core i5 7Y54">
                        Intel Core i5 7Y54
                      </option>
                      <option value="Intel Core i7 7820HK">
                        Intel Core i7 7820HK
                      </option>
                      <option value="Intel Xeon E3-1505M V6">
                        Intel Xeon E3-1505M V6
                      </option>
                      <option value="Intel Core i7 6500U">
                        Intel Core i7 6500U
                      </option>
                      <option value="AMD E-Series 9000e">
                        AMD E-Series 9000e
                      </option>
                      <option value="AMD A10-Series A10-9620P">
                        AMD A10-Series A10-9620P
                      </option>
                      <option value="AMD A6-Series A6-9220">
                        AMD A6-Series A6-9220
                      </option>
                      <option value="Intel Core i5">
                        Intel Core i5
                      </option>
                      <option value="Intel Core i7 6600U">
                        Intel Core i7 6600U
                      </option>
                      <option value="Intel Core i3 6006U">
                        Intel Core i3 6006U
                      </option>
                      <option value="Intel Celeron Dual Core 3205U">
                        Intel Celeron Dual Core 3205U
                      </option>
                      <option value="Intel Core i7 7820HQ">
                        Intel Core i7 7820HQ
                      </option>
                      <option value="AMD A10-Series 9600P">
                        AMD A10-Series 9600P
                      </option>
                      <option value="Intel Core i7 7600U">
                        Intel Core i7 7600U
                      </option>
                      <option value="AMD A8-Series 7410">
                        AMD A8-Series 7410
                      </option>
                      <option value="Intel Celeron Dual Core 3855U">
                        Intel Celeron Dual Core 3855U
                      </option>
                      <option value="Intel Pentium Quad Core N3710">
                        Intel Pentium Quad Core N3710
                      </option>
                      <option value="AMD A12-Series 9720P">
                        AMD A12-Series 9720P
                      </option>
                      <option value="Intel Core i5 7300U">
                        Intel Core i5 7300U
                      </option>
                      <option value="AMD A12-Series 9720P">
                        AMD A12-Series 9720P
                      </option>
                      <option value="Intel Celeron Quad Core N3450">
                        Intel Celeron Quad Core N3450
                      </option>
                      <option value="Intel Celeron Dual Core N3060">
                        Intel Celeron Dual Core N3060
                      </option>
                      <option value="Intel Core i5 6440HQ">
                        Intel Core i5 6440HQ
                      </option>
                      <option value="Intel Core i7 6820HQ">
                        Intel Core i7 6820HQ
                      </option>
                      <option value="AMD Ryzen 1600">
                        AMD Ryzen 1600
                      </option>
                      <option value="Intel Core i7 7Y75">
                        Intel Core i7 7Y75
                      </option>
                      <option value="Intel Core i5 7440HQ">
                        Intel Core i5 7440HQ
                      </option>
                      <option value="Intel Core i7 7660U">
                        Intel Core i7 7660U
                      </option>
                      <option value="Intel Core i7 7700HQ">
                        Intel Core i7 7700HQ
                      </option>
                      <option value="Intel Core M m3-7Y30">
                        Intel Core M m3-7Y30
                      </option>
                      <option value="Intel Core i5 7Y57">
                        Intel Core i5 7Y57
                      </option>
                      <option value="Intel Core i7 6700HQ">
                        Intel Core i7 6700HQ
                      </option>
                      <option value="Intel Core i3 6100U">
                        Intel Core i3 6100U
                      </option>
                      <option value="AMD A10-Series 9620P">
                        AMD A10-Series 9620P
                      </option>
                      <option value="AMD E-Series 7110">
                        AMD E-Series 7110
                      </option>
                      <option value="Intel Celeron Dual Core N3350">
                        Intel Celeron Dual Core N3350
                      </option>
                      <option value="AMD A9-Series A9-9420">
                        AMD A9-Series A9-9420
                      </option>
                      <option value="Intel Core i7 6820HK">
                        Intel Core i7 6820HK
                      </option>
                      <option value="Intel Core M 7Y30">
                        Intel Core M 7Y30
                      </option>
                      <option value="Intel Xeon E3-1535M v6">
                        Intel Xeon E3-1535M v6
                      </option>
                      <option value="Intel Celeron Quad Core N3160">
                        Intel Celeron Quad Core N3160
                      </option>
                      <option value="Intel Core i5 6300U">
                        Intel Core i5 6300U
                      </option>
                      <option value="Intel Core i3 6100U">
                        Intel Core i3 6100U
                      </option>
                      <option value="AMD E-Series E2-9000">
                        AMD E-Series E2-9000
                      </option>
                      <option value="Intel Celeron Dual Core N3050">
                        Intel Celeron Dual Core N3050
                      </option>
                      <option value="Intel Core M M3-6Y30">
                        Intel Core M M3-6Y30
                      </option>
                      <option value="AMD A9-Series 9420">
                        AMD A9-Series 9420
                      </option>
                      <option value="Intel Core i5 6300HQ">
                        Intel Core i5 6300HQ
                      </option>
                      <option value="AMD A6-Series 7310">
                        AMD A6-Series 7310
                      </option>
                      <option value="Intel Atom Z8350">
                        Intel Atom Z8350
                      </option>
                      <option value="Intel Xeon E3-1535M v5">
                        Intel Xeon E3-1535M v5
                      </option>
                      <option value="Intel Core i5 6260U">
                        Intel Core i5 6260U
                      </option>
                      <option value="Intel Pentium Dual Core N4200">
                        Intel Pentium Dual Core N4200
                      </option>
                      <option value="Intel Celeron Quad Core N3710">
                        Intel Celeron Quad Core N3710
                      </option>
                      <option value="Intel Core M">
                        Intel Core M
                      </option>
                      <option value="AMD A12-Series 9700P">
                        AMD A12-Series 9700P
                      </option>
                      <option value="Intel Core i7 7500U">
                        Intel Core i7 7500U
                      </option>
                      <option value="Intel Pentium Dual Core 4405U">
                        Intel Pentium Dual Core 4405U
                      </option>
                      <option value="AMD A4-Series 7210">
                        AMD A4-Series 7210
                      </option>
                      <option value="Intel Core i7 6560U">
                        Intel Core i7 6560U
                      </option>
                      <option value="Intel Core M m7-6Y75">
                        Intel Core M m7-6Y75
                      </option>
                      <option value="AMD FX 8800P">
                        AMD FX 8800P
                      </option>
                      <option value="Intel Core M M7-6Y75">
                        Intel Core M M7-6Y75
                      </option>
                      <option value="Intel Core i5 7200U">
                        Intel Core i5 7200U
                      </option>
                      <option value="Intel Core i5 7200U">
                        Intel Core i5 7200U
                      </option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="clock_speed"
                    >
                      Clock Speed
                    </label>
                    <select
                      id="clock_speed"
                      name="clock_speed"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleClockSpeedChange}
                      required
                    >
                      <option value="">Select Clock Speed</option>
                      <option value="2.7">2.7 GHz</option>
                      <option value="2.8">2.8 GHz</option>
                      <option value="2.3">2.3 GHz</option>
                      <option value="3.6">3.6 GHz</option>
                      <option value="2.5">2.5 GHz</option>
                      <option value="1.2">1.2 GHz</option>
                      <option value="2.0">2.0 GHz</option>
                      <option value="1.1">1.1 GHz</option>
                      <option value="2.4">2.4 GHz</option>
                      <option value="2.6">2.6 GHz</option>
                      <option value="3.0">3.0 GHz</option>
                      <option value="1.44">1.44 GHz</option>
                      <option value="1.6">1.6 GHz</option>
                      <option value="2.2">2.2 GHz</option>
                      <option value="1.5">1.5 GHz</option>
                      <option value="1.8">1.8 GHz</option>
                      <option value="1.3">1.3 GHz</option>
                      <option value="0.9">0.9 GHz</option>
                      <option value="2.9">2.9 GHz</option>
                    </select>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="ram_size"
                    >
                      RAM Size
                    </label>
                    <select
                      id="ram_size"
                      name="ram_size"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleRamSizeChange}
                      required
                    >
                      <option value="">Select RAM Size</option>
                      <option value="2">2GB</option>
                      <option value="4">4GB</option>
                      <option value="8">8GB</option>
                      <option value="16">16GB</option>
                      <option value="32">32GB</option>
                      <option value="64">64GB</option>
                      <option value="128">128GB</option>
                    </select>
                  </div>
                </div>

                {/* Storage Capacity */}
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="storage_capacity"
                    >
                      Storage Capacity (HDD)
                    </label>
                    <select
                      id="hdd_storage_capacity"
                      name="hdd_storage_capacity"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleHddStorageCapacityChange}
                    >
                      <option value="">Select Storage Capacity</option>
                      <option value="500">500GB</option>
                      <option value="750">750GB</option>
                      <option value="1024">1TB</option>
                      <option value="2048">2TB</option>
                      <option value="4096">4TB</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

                {/* Storage Capacity (SSD) */}
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="ssd_storage_capacity"
                    >
                      Storage Capacity (SSD)
                    </label>
                    <select
                      id="ssd_storage_capacity"
                      name="ssd_storage_capacity"
                      className="border-0 px-4 py-3 placeholder-blueGray-300 text-white bg-custom-color rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ backgroundColor: "#1D2432" }}
                      onChange={handleSsdStorageCapacityChange}
                    >
                      <option value="">Select Storage Capacity</option>
                      <option value="128">128GB</option>
                      <option value="256">256GB</option>
                      <option value="512">512GB</option>
                      <option value="1024">1TB</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

              </div>

            <div className="flex flex-col justify-center items-center p-4">
              <div className="flex flex-col justify-center items-center w-full px-4 mt-4">
                <button
                  className="hover-zoom bg-blue-900 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:bg-gray-200 hover:text-black hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 "
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </div>        

            </form>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50">
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm z-10"></div>
          <div className="text-white font-bold text-2xl mb-10 z-20 ">
            Please wait, your price is being predicted
          </div>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 loading-circle z-20"></div>

          <div className="text-white font-bold text-2xl mt-10 z-20">
            Disclaimer
          </div>

          <div className="text-white font-bold text-0.5xl z-20">
            It's essential to note that any predicted price provided here is an
            estimate and may vary from the actual prices found in the market.
          </div>
        </div>
      )}
      {showPredictionPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <div className="text-center text-black font-bold text-3xl mb-4">
              Predicted Price: Rs. {predictedPrice}
            </div>
            <div className="text-center text-black font-bold text-2xl mb-4">
              Information About Laptop Prices
            </div>
            <div className="text-center text-black font-semibold text-lg mb-4">
              Laptop pricing can fluctuate based on factors such as
              specifications, brand reputation, and market demand, often
              reflecting a balance between performance and affordability
            </div>
            <div className="text-center text-black font-bold text-2xl mb-4">
              Note
            </div>
            <div className="text-center text-black font-semibold text-lg mb-4">
              Price predictions may not reflect exact market values
            </div>
            <button
              onClick={() => setShowPredictionPopup(false) & setOsVersionValue("10") & setSsdStorageCapacityValue("0") & setHddStorageCapacityValue("0") & setStorageCapacityValue("0") & setWeightValue("1.0") & setScreenSizeValue("14.0")}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
