-- These INSERT statements are not queried into the database yet, is just an example waiting for further data modification
-- Insert users
INSERT INTO public.users (name, email, password, role)
VALUES (
        'John Doe',
        'john@example.com',
        'hashedpassword123',
        'admin'
    ),
    (
        'Jane Smith',
        'jane@example.com',
        'hashedpassword456',
        'client'
    ),
    (
        'Alice Johnson',
        'alice@example.com',
        'hashedpassword789',
        'seller'
    );
-- Insert products
INSERT INTO public.products (name, description, price, image_url, user_id)
VALUES (
        'Wireless Headphones',
        'High-quality noise-canceling headphones.',
        129.99,
        'https://example.com/headphones.jpg',
        3
    ),
    (
        'Gaming Laptop',
        'Powerful laptop for gaming and work.',
        1599.99,
        'https://example.com/laptop.jpg',
        3
    ),
    (
        'Smartwatch',
        'Feature-packed smartwatch with health tracking.',
        249.99,
        'https://example.com/smartwatch.jpg',
        3
    );
-- Insert reviews
INSERT INTO public.reviews (user_id, product_id, description)
VALUES (2, 1, 'Great sound quality, very comfortable.'),
    (2, 2, 'Super fast and reliable for gaming.'),
    (1, 3, 'Love the health tracking features!');