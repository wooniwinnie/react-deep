import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

type Product = {
    id: string;
    name: string;
    price: string;
};
export default function Products() {
    const [checked, setChecked] = useState<boolean>(false);
    const { loading, error, products } = useProducts({
        salesOnly: checked,
    });
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    if (loading) return <p>Loading 중입니돠</p>;

    if (error) return <p>{error}</p>;
    return (
        <>
            <input type='checkbox' checked={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>세일품목 보기</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}
