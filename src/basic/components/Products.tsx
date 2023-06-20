import React, { useEffect, useState } from 'react';

type Props = {};

type Product = {
    id: string;
    name: string;
    price: string;
};

export default function Products({}: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [checked, setChecked] = useState<string>('false');
    const handleChange = () => {
        setChecked((prev) => (prev === 'true' ? 'false' : 'true'));
    };
    useEffect(() => {
        fetch(`data/${checked === 'true' ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터 전송 완료');
                setProducts(data);
            });
        return () => {
            console.log('청소 진행합니다');
        };
    }, [checked]);

    return (
        <>
            <input type='checkbox' value={checked} onChange={handleChange} />
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
