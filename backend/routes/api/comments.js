const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Export the router to be used in other parts of the application
module.exports = router;

/**
 * GET /
 * Fetches all comments from the database.
 * 
 * Response:
 * - 200 OK: Returns a JSON object containing all comments.
 * - 500 Internal Server Error: Logs the error to the console if an error occurs during the fetch operation.
 */
router.get("/", (req, res) => {
  Comment.find()
    .then(comments => {
      res.json({ comments });
    })
    .catch(err => console.log(err));
});

/**
 * DELETE /:id
 * Deletes a comment by its ID.
 * 
 * Parameters:
 * - id (URL parameter): The ID of the comment to be deleted.
 * 
 * Response:
 * - 200 OK: Returns a JSON object indicating success.
 * - 500 Internal Server Error: Logs the error to the console and returns a JSON object with an error message if an error occurs during the delete operation.
 */
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});