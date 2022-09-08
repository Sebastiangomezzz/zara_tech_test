import { render, screen } from '@testing-library/react';
import { ProductDetailPage } from '../../pages';
import { MemoryRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';

describe('ProductDetailPage tests', () => {
    // const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    // const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    // beforeEach(() => {
    //   useSelectorMock.mockClear();
    //   useDispatchMock.mockClear();
    // });
    const phone = {
        id: 'dblsdkfsfdf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
    };
    test('Should render a ProductDetail component', () => {
        render(<ProductDetailPage phone={phone} />, { wrapper: MemoryRouter });
    });
    test('Should render a ProductDetail component with the correct phone data', () => {
        render(<ProductDetailPage phone={phone} />, { wrapper: MemoryRouter });
        const productDetail = screen.getByTestId('product-detail');
        expect(productDetail).toBeInTheDocument();
        expect(productDetail).toHaveTextContent(phone.brand);
        expect(productDetail).toHaveTextContent(phone.model);
        expect(productDetail).toHaveTextContent(phone.price);
    });
});
