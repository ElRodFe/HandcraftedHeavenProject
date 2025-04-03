-- Start transaction
BEGIN;
-- Insert users
INSERT INTO public.users (name, email, password, role)
VALUES (
        'Admin User',
        'admin@example.com',
        'hashedpassword1',
        'admin'
    ),
    (
        'Client User',
        'client@example.com',
        'hashedpassword2',
        'client'
    ),
    (
        'Seller User',
        'seller@example.com',
        'hashedpassword3',
        'seller'
    );
-- Insert products (assuming seller user ID is 3)
INSERT INTO public.products (
        name,
        description,
        price,
        image_url,
        category,
        user_id
    )
VALUES (
        'Product A',
        'Description for Product A',
        19.99,
        'https://example.com/product-a.jpg',
        'fibers',
        3
    ),
    (
        'Product B',
        'Description for Product B',
        29.99,
        'https://example.com/product-b.jpg',
        'ceramics',
        3
    ),
    (
        'Product C',
        'Description for Product C',
        9.99,
        'https://example.com/product-c.jpg',
        'jewelery',
        3
    );
-- Insert reviews (assuming client user ID is 2)
INSERT INTO public.reviews (user_id, product_id, description)
VALUES (2, 1, 'Great product! Really enjoyed it.'),
    (2, 2, 'Not bad, but could be improved.'),
    (2, 3, 'Excellent quality, highly recommend!');
-- Insert orders (assuming client user ID is 2)
INSERT INTO public.orders (user_id, product_id, quantity, date)
VALUES (2, 1, 1, NOW()),
    (2, 2, 3, NOW()),
    (2, 3, 2, NOW());
-- Commit transaction
COMMIT;