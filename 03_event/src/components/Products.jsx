import React from 'react';

const Products = ({products, del}) => {
    console.log(products);
    return (
        <>
            <h3>4. 상품 목록</h3>

            <table>
                <thead>
                    <tr>
                        <th>상품 코드</th>
                        <th>상품 이름</th>
                        <th>상품 가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return(
                        <tr key={product.code}> 
                        {/* 키값 설정 안해두면 개발자 도구에 경고 뜸 */}
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={()=> del(product.code)}>삭제</button></td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Products;