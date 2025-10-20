const updateLivros = async (title, author, year, genre) => {
    try{
        const updateLivros = await book.findByIdAndUpdate(
            id,
            {title, author, year, genre},
            {new: true, runValidators: true}
        );
        return updateLivros;
    } catch (error){
        console.error("Error to update", error.message);
        throw error;
    }
};

module.exports = updateLivros;