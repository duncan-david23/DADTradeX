import ChaseBLogo from '../assets/ChaseBankLogo.png';
import PaystackLogo from '../assets/Paystack_Logo.png';
import MasterCardLogo from '../assets/MastercardLogo.svg';
import VISA from '../assets/VISALogo.png';
import TelelcelCashLogo from '../assets/TelecelCashLogo.png';
import appleLogo from '../assets/appleLogo.png';
import fanMilkLogo from '../assets/FANMILK-logo.webp';
import mcDLogo from '../assets/mcD-logo.png';
import metaLogo from '../assets/meta-logo.png';
import NikeLogo from '../assets/Nike-Logo.png';
import NvidiaLogo from '../assets/Nvidia-Logo.png';
import payPalLogo from '../assets/paypal-logo.png';
import QICLogo from '../assets/QIC-logo.webp';
import telecelLogo from '../assets/telecel-logo.png';
import ecobankLogo from '../assets/Ecobank-Logo.png';
import gcbLogo from '../assets/GCB_LOGO.png';
import guinnessLogo from '../assets/Guinness_logo.png';
import mtnLogo from '../assets/MTN_Logo.svg.png';
import sicLogo from '../assets/sic_logo.jpg';
import schartLogo from '../assets/stchart_logo.png'; 
import unileverLogo from '../assets/Unilever_logo.png'; 





export const images = [
    {
        id:1,
        img: ChaseBLogo
    },
    {
        id:2,
        img: PaystackLogo
    },
    {
        id:3,
        img: MasterCardLogo
    },
    {
        id:4,
        img: VISA
    },
    {
        id:5,
        img: TelelcelCashLogo
    },
]


export const stockData = [
    {
        id:1,
        symbol: "MTN",
        name: "MTN Inc",
        volume: 151762,
        price: 2.16,
        change: "2.37",
        marketCap: 327805.92,
        img: mtnLogo
    },
    {
        id:2,
        symbol: "FANML",
        name: "FanMilk Inc",
        volume: 6951,
        price: 3.70,
        change: "0.00",
        marketCap: 25718.70,
        img: fanMilkLogo
    },
    {
        id:3,
        symbol: "QIC",
        name: "Quality Insurance Inc",
        volume: 700000,
        price: 37.88,
        change: "25.55",
        marketCap:26516000.00,
        img: QICLogo
    },
    {
        id:4,
        symbol: "GNS",
        name: "Guinness Inc",
        volume: 42,
        price: 4.70,
        change: "0.17",
        marketCap:197.40,
        img: guinnessLogo
    },
    {
        id:5,
        symbol: "GCB",
        name: "Ghana Commercial Bank",
        volume: 3224,
        price: 6.15,
        change: "0.00",
        marketCap:19827.60,
        img: gcbLogo
    },
    {
        id:6,
        symbol: "STCT",
        name: "Stanchart Inc",
        volume: 58,
        price: 1334,
        change: "0.00",
        marketCap: 77372.00,
        img: schartLogo
    },
    {
        id:7,
        symbol: "SIC",
        name: "SIC Insurance Inc",
        volume: 348,
        price: 0.25,
        change: "0.93",
        marketCap:  87.00,
        img: sicLogo
    },
    {
        id:8,
        symbol: "TLCL",
        name: "Telecel Inc",
        volume: 8500000,
        price: 7.88,
        change: "0.73",
        marketCap:  66980000.00,
        img: telecelLogo
    },
    {
        id:9,
        symbol: "ECB",
        name: "Ecobank Trans.",
        volume: 2000,
        price: 0.20,
        change: "5.26",
        marketCap:  400.00,
        img: ecobankLogo
    },
    {
        id:10,
        symbol: "UNLV",
        name: "Unilever Inc",
        volume: 0,
        price: 16.50,
        change: "0.23",
        marketCap:  0.00,
        img: unileverLogo
    }
]






export const stockPrices = [
    { id: 1, time: "2024-10-01T09:00:00", price: 42345.67 },
    { id: 2, time: "2024-10-01T10:00:00", price: 45230.12 },
    { id: 3, time: "2024-10-01T11:00:00", price: 47890.50 },
    { id: 4, time: "2024-10-01T12:00:00", price: 49125.23 },
    { id: 5, time: "2024-10-01T13:00:00", price: 44321.45 },
    { id: 6, time: "2024-10-01T14:00:00", price: 45000.00 },
    { id: 7, time: "2024-10-01T15:00:00", price: 46890.10 },
    { id: 8, time: "2024-10-01T16:00:00", price: 47785.75 },
    { id: 9, time: "2024-10-02T09:00:00", price: 50100.00 },
    { id: 10, time: "2024-10-02T10:00:00", price: 48000.50 },
    { id: 11, time: "2024-10-02T11:00:00", price: 49567.33 },
    { id: 12, time: "2024-10-02T12:00:00", price: 50789.99 },
    { id: 13, time: "2024-10-02T13:00:00", price: 50500.00 },
    { id: 14, time: "2024-10-02T14:00:00", price: 53000.15 },
    { id: 15, time: "2024-10-02T15:00:00", price: 54000.90 },
    { id: 16, time: "2024-10-03T09:00:00", price: 45000.80 },
    { id: 17, time: "2024-10-03T10:00:00", price: 46500.60 },
    { id: 18, time: "2024-10-03T11:00:00", price: 47890.90 },
    { id: 19, time: "2024-10-03T12:00:00", price: 49000.55 },
    { id: 20, time: "2024-10-03T13:00:00", price: 50000.00 },
    { id: 21, time: "2024-10-03T14:00:00", price: 56000.70 },
    { id: 22, time: "2024-10-03T15:00:00", price: 55000.30 },
    { id: 23, time: "2024-10-04T09:00:00", price: 58000.45 },
    { id: 24, time: "2024-10-04T10:00:00", price: 59000.80 },
    { id: 25, time: "2024-10-04T11:00:00", price: 57500.10 },
    { id: 26, time: "2024-10-04T12:00:00", price: 56230.90 },
    { id: 27, time: "2024-10-04T13:00:00", price: 55050.20 },
    { id: 28, time: "2024-10-04T14:00:00", price: 54000.40 },
    { id: 29, time: "2024-10-04T15:00:00", price: 53000.25 },
    { id: 30, time: "2024-10-05T09:00:00", price: 52000.00 }
  ];
        

    export const singleStockPrices = [
  { id: 1, time: "2024-10-01T09:00:00", price: 100.50 },
  { id: 2, time: "2024-10-01T10:00:00", price: 101.25 },
  { id: 3, time: "2024-10-01T11:00:00", price: 99.75 },
  { id: 4, time: "2024-10-01T12:00:00", price: 102.00 },
  { id: 5, time: "2024-10-01T13:00:00", price: 103.50 },
  { id: 6, time: "2024-10-01T14:00:00", price: 102.75 },
  { id: 7, time: "2024-10-01T15:00:00", price: 104.00 },
  { id: 8, time: "2024-10-02T09:00:00", price: 105.50 },
  { id: 9, time: "2024-10-02T10:00:00", price: 106.25 },
  { id: 10, time: "2024-10-02T11:00:00", price: 107.00 },
  { id: 11, time: "2024-10-02T12:00:00", price: 108.50 },
  { id: 12, time: "2024-10-02T13:00:00", price: 109.75 },
  { id: 13, time: "2024-10-02T14:00:00", price: 110.00 },
  { id: 14, time: "2024-10-02T15:00:00", price: 111.25 },
  { id: 15, time: "2024-10-03T09:00:00", price: 112.50 },
  { id: 16, time: "2024-10-03T10:00:00", price: 113.00 },
  { id: 17, time: "2024-10-03T11:00:00", price: 114.75 },
  { id: 18, time: "2024-10-03T12:00:00", price: 115.25 },
  { id: 19, time: "2024-10-03T13:00:00", price: 116.50 },
  { id: 20, time: "2024-10-03T14:00:00", price: 117.00 },
  { id: 21, time: "2024-10-03T15:00:00", price: 118.75 },
  { id: 22, time: "2024-10-04T09:00:00", price: 119.00 },
  { id: 23, time: "2024-10-04T10:00:00", price: 120.25 },
  { id: 24, time: "2024-10-04T11:00:00", price: 121.50 },
  { id: 25, time: "2024-10-04T12:00:00", price: 122.75 },
  { id: 26, time: "2024-10-04T13:00:00", price: 123.00 },
  { id: 27, time: "2024-10-04T14:00:00", price: 124.50 },
  { id: 28, time: "2024-10-04T15:00:00", price: 125.00 },
  { id: 29, time: "2024-10-05T09:00:00", price: 126.25 },
  { id: 30, time: "2024-10-05T10:00:00", price: 127.00 },
    ];