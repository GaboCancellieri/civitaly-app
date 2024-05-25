import { ReactNode } from "react";

export interface ModalTitle {
    title: string;
  }
  
  export interface ModalContent {
    content?:  ReactNode;
  }
  
  export interface ModalPosition {
    top: number;
    left: number;
  }