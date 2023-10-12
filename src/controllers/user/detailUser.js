const { getUserAndReturn } = require('../../services');

const detailUser = async (req, res) => {
	try {
    const { authorization } = req.headers;

    const response = await getUserAndReturn(authorization);

		return res.json(response);
	} catch(error) {
		return res.status(500).json({ message: "Internal server error"});
	};
};

module.exports = {
  detailUser
};
