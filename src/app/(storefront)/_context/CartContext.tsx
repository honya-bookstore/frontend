'use client'

import {createContext, useContext, useState, useMemo, ReactNode, useEffect} from "react";
import {Book, CartItem} from "@/types/types";
import cart from "@/mocks/data/cart.json"

interface CartContextType {
    cartItems: CartItem[];
    subtotal: number;
    addToCart: (book: Book) => void;
    removeFromCart: (bookId: number) => void;
    updateQuantity: (bookId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({children}: {children: ReactNode}) {

    const [cartItems, setCartItems] = useState<CartItem[]>(cart);

    /*useEffect(() => {

        const fetchCart = async () => {
            try {
                const response = await fetch('https://api.example.com/cart', {cache: 'no-store'});
                if (response.ok) {
                    const data: CartItem[] = await response.json();
                    setCartItems(data || []);
                } else {
                    console.error('Failed to fetch cart data');
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        fetchCart();
    }, []);*/

    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);

    const addToCart = (book: Book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => book.id === item.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === book.id ? {...item, quantity: item.quantity + 1} : item
                )}
            else {
                return [...prevItems, {...book, quantity: 1}];
            }
        });
    }

    const removeFromCart = (bookId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
    }

    const updateQuantity = (bookId: number, newQuantity: number) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === bookId ? {...item, quantity: newQuantity} : item
            );
        })
    }

    const value = useMemo(() => ({
        cartItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity
    }), [cartItems, subtotal]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    return useContext(CartContext) as CartContextType;
}