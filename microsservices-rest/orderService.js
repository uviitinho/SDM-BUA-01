const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

let orders = [];

app.post('/orders', (req, res) => {
    // Endpoint to create a new order
    // Example request body: { "id": 1, "product": "Laptop", "quantity": 2 }
    // Validate request body
    const { id, product, quantity } = req.body;
    if (!id || !product || !quantity) {
        return res.status(400).json({ error: 'Invalid order data' });
    }
    const newOrder = { id, product, quantity };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});


app.get('/orders', (req, res) => {
    // Endpoint to get all orders
    res.status(200).json(orders);
});

app.get('/orders/:id', (req, res) => {
    // Endpoint to get a specific order by ID
    const orderId = parseInt(req.params.id, 10);
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
});

app.put('/orders/:id', (req, res) => {
    // Endpoint to update an order by ID
    const orderId = parseInt(req.params.id, 10);
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }
    const { product, quantity } = req.body;
    if (!product || !quantity) {
        return res.status(400).json({ error: 'Invalid order data' });
    }
    orders[orderIndex] = { id: orderId, product, quantity };
    res.status(200).json(orders[orderIndex]);
}); 

app.delete('/orders/:id', (req, res) => {
    // Endpoint to delete an order by ID
    const orderId = parseInt(req.params.id, 10);
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }
    orders.splice(orderIndex, 1);
    res.status(204).send();  // No content response
});

app.get('/', (req, res) => {
    // Health check endpoint
    res.status(200).json({ message: 'Order Service is running' });
});


app.listen(4000, () => console.log('Order Service rodando na porta 4000'));