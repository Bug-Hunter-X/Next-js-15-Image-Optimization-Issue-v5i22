```javascript
import Image from 'next/image';

function MyComponent() {
  return (
    <div>
      <Image
        src="/images/my-image.jpg"
        alt="My Image"
        width={500}
        height={300}
      />
    </div>
  );
}

export default MyComponent;

// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
    loader: 'custom',
  },
};
```