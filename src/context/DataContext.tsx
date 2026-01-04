'use client';

import React, { createContext, useContext, useState } from 'react';

// Define Data Types
export interface Case {
    id: string;
    name: string;
    amount: number;
    amountStr: string;
    days: number;
    score: number;
    rec: string;
}

export interface Agency {
    name: string;
    rating: number;
    recovered: string;
    active: number;
    compliance: string;
}

export interface DashboardMetrics {
    totalRecovered: string;
    trendRecovered: string; // 'up' | 'down'
    activeAllocations: string;
    trendAllocations: string;
    avgTime: string;
    efficiency: string;
}

interface DataContextType {
    isLoading: boolean;
    currentDataset: 'empty' | 'set1' | 'set2';
    loadData: (set: 'set1' | 'set2') => void;
    clearData: () => void;
    metrics: DashboardMetrics;
    cases: Case[];
    agencies: Agency[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// --- DEMO DATASETS ---

const DATA_SET_1 = {
    metrics: {
        totalRecovered: "$1,245,000",
        trendRecovered: "up",
        activeAllocations: "1,432",
        trendAllocations: "up",
        avgTime: "14 Days",
        efficiency: "87.4%"
    },
    cases: [
        { id: 'C-1023', name: 'Acme Logistics', amount: 54000, amountStr: '$54,000', days: 45, score: 92, rec: 'Premium Agency (Alpha)' },
        { id: 'C-1045', name: 'Beta Shipping', amount: 12500, amountStr: '$12,500', days: 62, score: 78, rec: 'Standard Agency' },
        { id: 'C-1102', name: 'Delta Freight', amount: 8200, amountStr: '$8,200', days: 31, score: 88, rec: 'Internal Retention' },
        { id: 'C-1155', name: 'Echo Trans', amount: 23100, amountStr: '$23,100', days: 95, score: 45, rec: 'Legal Escalation' },
        { id: 'C-1201', name: 'Foxtrot Air', amount: 150000, amountStr: '$150,000', days: 28, score: 96, rec: 'Premium Agency (Alpha)' },
    ],
    agencies: [
        { name: 'Alpha Recoveries', rating: 4.8, recovered: '$1.2M', active: 320, compliance: '98%' },
        { name: 'Swift Collect', rating: 4.2, recovered: '$850k', active: 410, compliance: '95%' },
        { name: 'LegalPoint Solutions', rating: 4.5, recovered: '$920k', active: 150, compliance: '100%' },
        { name: 'Global Debt Mgmt', rating: 3.8, recovered: '$450k', active: 210, compliance: '89%' },
    ]
};

const DATA_SET_2 = {
    metrics: {
        totalRecovered: "$540,200",
        trendRecovered: "down",
        activeAllocations: "3,105",
        trendAllocations: "up",
        avgTime: "28 Days",
        efficiency: "62.1%"
    },
    cases: [
        { id: 'R-9901', name: 'Home Depot Outlet', amount: 2400, amountStr: '$2,400', days: 120, score: 25, rec: 'Write-off Risk' },
        { id: 'R-9902', name: 'General Motors Dealer', amount: 45000, amountStr: '$45,000', days: 15, score: 98, rec: 'Premium Agency' },
        { id: 'R-9903', name: 'Local Cafe Chain', amount: 800, amountStr: '$800', days: 180, score: 12, rec: 'Auto-Call' },
        { id: 'R-9904', name: 'Tech Startup Inc', amount: 12000, amountStr: '$12,000', days: 45, score: 65, rec: 'Standard Agency' },
    ],
    agencies: [
        { name: 'RetailRecover', rating: 3.5, recovered: '$120k', active: 1200, compliance: '85%' },
        { name: 'MassCollect', rating: 3.9, recovered: '$300k', active: 900, compliance: '91%' },
        { name: 'AutoDial Systems', rating: 2.5, recovered: '$50k', active: 500, compliance: '78%' },
    ]
};

const EMPTY_DATA = {
    metrics: { totalRecovered: "-", trendRecovered: "0%", activeAllocations: "-", trendAllocations: "0", avgTime: "-", efficiency: "-" },
    cases: [],
    agencies: []
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentDataset, setCurrentDataset] = useState<'empty' | 'set1' | 'set2'>('empty');
    const [isLoading, setIsLoading] = useState(false);

    // Default to empty
    const [data, setData] = useState<{
        metrics: DashboardMetrics;
        cases: Case[];
        agencies: Agency[];
    }>(EMPTY_DATA);

    const loadData = (set: 'set1' | 'set2') => {
        setIsLoading(true);
        setCurrentDataset(set);

        // Simulate Network Request
        setTimeout(() => {
            if (set === 'set1') setData(DATA_SET_1);
            if (set === 'set2') setData(DATA_SET_2);
            setIsLoading(false);
        }, 1200); // 1.2s delay for realism
    };

    const clearData = () => {
        setCurrentDataset('empty');
        setData(EMPTY_DATA);
    };

    return (
        <DataContext.Provider value={{
            isLoading,
            currentDataset,
            loadData,
            clearData,
            metrics: data.metrics as DashboardMetrics,
            cases: data.cases,
            agencies: data.agencies
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData must be used within DataProvider');
    return context;
};
