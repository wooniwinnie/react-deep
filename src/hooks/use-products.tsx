import { useState, useEffect } from 'react';
type Product = {
    id: string;
    name: string;
    price: string;
};
type Error = string | undefined;

type UseProdcutsParams = {
    salesOnly: boolean | string;
};

type UseProductReturn = {
    loading: boolean;
    error: Error;
    products: Product[];
};

export default function useProducts({
    salesOnly,
}: UseProdcutsParams): UseProductReturn {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly === 'true' ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터 전송 완료');
                setProducts(data);
            })
            .catch((e) => setError('에러가 발생했다!'))
            .finally(() => setLoading(false));
        return () => {
            console.log('청소 진행합니다');
        };
    }, [salesOnly]);

    return { loading, error, products };
}
