import { getProductById } from "@app/services/productsService";
import { getReviewsByProductId } from "@app/services/reviewsService";
import Navbar from "@app/components/Navbar";
import Footer from "@app/components/Footer";
import ReviewForm from "./ReviewForm"; // Import the client component
import { Row } from "postgres";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const data = await params
  const id= data.id // Access `params.id` directly as a string

  try {
    const product = await getProductById(Number(id)); // Convert `id` to a number
    const reviews = await getReviewsByProductId(Number(id));

    if (!product) {
      return (
        <div className="product-page">
          <Navbar />
          <section className="section">
            <div className="container has-text-centered">
              <h1 className="title is-4">Product not found</h1>
              <p className="is-size-6">The product you are looking for does not exist.</p>
            </div>
          </section>
          <Footer />
        </div>
      );
    }

    return (
      <div className="product-page">
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              {/* Product Image and Description */}
              <div className="column is-half has-text-centered">
                <figure
                  className="image is-inline-block"
                  style={{
                    maxWidth: "250px",
                    maxHeight: "250px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img src={product.image_url} alt={product.name} />
                </figure>
                <p className="is-size-7 mt-4 has-text-centered">{product.description}</p>
              </div>

              {/* Product Details */}
              <div className="column is-half has-text-centered">
                <div className="box" style={{ padding: "20px" }}>
                  <h1 className="title is-4 has-text-centered">{product.name}</h1>
                  <p className="subtitle is-6 has-text-weight-bold has-text-primary has-text-centered">
                    ${product.price}
                  </p>

                  {/* Add to Cart Section */}
                  <div className="box has-text-centered" style={{ maxWidth: "300px", margin: "0 auto" }}>
                    <p className="has-text-weight-bold is-size-7 has-text-centered">In Stock</p>
                    <button className="button is-primary is-small is-fullwidth">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="section">
              <h2 className="title is-4 has-text-centered">Reviews</h2>
              <div className="columns is-centered">
                {reviews.length > 0 ? (
                  reviews.slice(0, 3).map((review: Row) => (
                    <div
                      key={review.id}
                      className={`column is-one-third has-text-centered`}
                      style={{
                        maxHeight: "400px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "20px",
                        margin: "10px",
                      }}
                    >
                      <p className="has-text-weight-bold">{review.username}</p>
                      <p className="is-size-7">{`"${review.description}"`}</p>
                    </div>
                  ))
                ) : (
                  <p className="has-text-centered">No reviews yet. Be the first to review this product!</p>
                )}
              </div>

              {/* Add Review Form */}
              <ReviewForm productId={Number(id)} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product or reviews:", error);
    return (
      <div className="product-page">
        <Navbar />
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title is-4">Error</h1>
            <p className="is-size-6">There was an error fetching the product details or reviews. Please try again later.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}