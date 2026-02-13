async function profile(req, res) {
    try {
        const user = req.user; // Gets user data from auth middleware

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const userProfile = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        return res.status(200).json({ profile: userProfile });
    } catch (error) {
        console.error("Error obtaining user profile:", error.message);
        return res.status(500).json({ message: "Internal server error." });
    }
}

module.exports = { profile };
