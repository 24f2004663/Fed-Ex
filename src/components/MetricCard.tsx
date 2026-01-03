import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import styles from './MetricCard.module.css';

interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    icon?: React.ElementType;
}

export default function MetricCard({ title, value, change, trend, icon: Icon }: MetricCardProps) {
    const isUp = trend === 'up';

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                {Icon && <div className={styles.iconWrapper}><Icon size={20} /></div>}
            </div>
            <div className={styles.content}>
                <div className={styles.value}>{value}</div>
                <div className={`${styles.change} ${isUp ? styles.success : styles.danger}`}>
                    {isUp ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    <span>{change} vs last month</span>
                </div>
            </div>
        </div>
    );
}
