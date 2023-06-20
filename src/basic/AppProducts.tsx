import React, { useState } from 'react';
import Products from './components/Products';

type Props = {};

export default function AppProducts({}: Props) {
    const [showProducts, setShowProdcuts] = useState<boolean>(true);
    return (
        <div>
            {showProducts && <Products />}
            <button onClick={() => setShowProdcuts((show) => !show)}>
                Toggle
            </button>
        </div>
    );
}
