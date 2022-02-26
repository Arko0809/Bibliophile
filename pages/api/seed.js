import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import data from '../../utils/data';
import User from './../../models/User';

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });

  } catch (error) {
      console.log(error);
  }

});

export default handler;

