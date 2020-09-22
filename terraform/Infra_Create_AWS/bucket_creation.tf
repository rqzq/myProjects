resource "random_id" "random" {
  byte_length = 8
}

resource "aws_s3_bucket" "bucket" {
  bucket = "la-bucket-${random_id.random.hex}"
  acl = "private"

  tags = {
    Name = "My Bucket"
    Environment = "Test"
  }

  versioning {
    enabled = true
  }

}

output "bucketDetails" {
  value = aws_s3_bucket.bucket.id
}