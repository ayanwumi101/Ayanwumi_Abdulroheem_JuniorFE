import {ReactNode} from 'react'

export interface CarouselProps {
    image: string;
    title: string;
    description: string;
}

export interface CapsuleCardProps {
    id: string;
    type: string;
    status: string;
    serial: string;
    onClick: () => void;
}

export interface ButtonProps {
  bg: string;
  color: string;
  text: string;
  width: string;
  onClick: () => void;
}

export interface CustomModalprops {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


export interface RocketContextProps {
  rockets: any[];
  loading: boolean;
  setRockets: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface CapsuleDetailsProps {
    id?: string;
    type?: string;
    status?: string;
    serial?: string;
    last_update?: string;
    land_landings?: number;
    reuse_count?: number;
    launches?: string[];
    water_landings?: number;
}

export interface PaginationProps {
    rockets?: any[];
    itemsPerPage: number;
    currentPage: number;
    indexOfLastItem: number;
    setCurrentPage: (value: number) => void;
}

export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void
}