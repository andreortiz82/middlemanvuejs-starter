task :deploy do
  require "aws-sdk"

  Aws.config.update({
    region: 'us-east-1',
    credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
  })

  s3 = Aws::S3::Resource.new
  bucket = s3.bucket(ENV['AWS_BUCKET'])

  puts "Roboto Build..."
  puts `bundle exec middleman build`
  puts "..............................."

  puts "Roboto Deploy..."
  puts "..............................."

  puts "#{bucket.name} files are: "

  bucket.objects.each do |object|
    puts "Deleting ..............................."
    puts "#{object.key} - #{object.etag}"
    object.delete
  end

  Dir.glob("build/**/*.*").each do |file_name|
    key = file_name.sub("build/","")
    bucket.object(key).upload_file(file_name)
    puts "Uploading ..............................."
    puts "#{key} to #{bucket.name}."
  end

  puts "..............................."
  puts "Roboto is done. Have a nice day."

end

