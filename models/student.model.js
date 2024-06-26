module.exports = (mongoose) => {
    const Student = mongoose.model
    (
        'student',
        mongoose.Schema
        (
            {
                title: String,
                description: String,
                published: Boolean

            },
            {
                timestamps: true
            }
        )
    )
    return Student;
}