

function toggleEdit(postId) {

    const form = document.getElementById(`editForm-${postId}`);

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}