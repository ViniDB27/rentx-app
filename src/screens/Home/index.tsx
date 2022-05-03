import React from "react";

import { StatusBar } from "react-native";
import { Container, Header, Title, Carlist } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { CarCard } from "../../components/CarCard";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  type: string; //"gasoline" | "eletric";
  thumbnail: string;
}

export function Home() {
  const data: CarData[] = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      type: "gasoline",
      thumbnail:
        "https://www.pikpng.com/pngl/b/391-3910364_2018-audi-rs-5-coupe-audi-a8-coup.png",
    },
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      type: "gasoline",
      thumbnail:
        "https://bluesky-cogcms.cdn.imgeng.in/media/36768/rs5coupe.png?width=650&height=366&scale=both&quality=1",
    },
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      type: "gasoline",
      thumbnail:
        "https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/1ed4d2741ccb4dfd9bff893c12d836f7.jpg",
    },
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      type: "gasoline",
      thumbnail:
        "https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2022AUC29_640/2022AUC290017_640_01.png",
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <Title>Total 12 carros</Title>
      </Header>

      <Carlist
        data={data}
        renderItem={({ item }) => <CarCard data={item as CarData} />}
      />
    </Container>
  );
}
