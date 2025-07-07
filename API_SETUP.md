# API Integration Setup

This portfolio integrates with real content from YouTube and Medium to showcase authentic work and content creation.

## 🔧 Current Status

✅ **Medium RSS Integration** - Fully working, no setup required
⚠️ **YouTube Data API** - Requires API key for real data (uses fallback otherwise)

## 📝 Medium Integration

The Medium integration uses RSS feeds and works out of the box:

- **Source**: `https://medium.com/feed/@vrushabh-bayas`
- **Data**: Real articles, titles, publication dates, content previews
- **Update Frequency**: Cached for 6 hours
- **Setup Required**: None

## 🎬 YouTube Integration Setup

To display real YouTube data instead of fallback content:

### Step 1: Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**

### Step 2: Create API Key
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Copy the generated API key

### Step 3: Configure Environment
1. Open `.env.local` in the project root
2. Add your API key:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```

### Step 4: Verify Integration
1. Restart the development server: `npm run dev`
2. Visit the About page to see real YouTube data
3. Check for success indicators (no fallback warnings)

## 🔒 Security Notes

- The YouTube API key is used server-side only (secure)
- API calls are cached to minimize quota usage
- Free tier provides 10,000 units/day (sufficient for portfolio use)
- No payment information required

## 📊 API Quotas

- **Medium RSS**: Unlimited and free
- **YouTube API**: 10,000 units/day (free tier)
  - Channel stats: ~1 unit
  - Video list: ~1 unit per request
  - Typical daily usage: ~50-100 units

## 🛠️ Troubleshooting

### YouTube API Issues
- **"API key needed"**: Add `YOUTUBE_API_KEY` to `.env.local`
- **"Quota exceeded"**: Wait until next day or enable billing
- **"API not enabled"**: Enable YouTube Data API v3 in Google Cloud Console

### Medium RSS Issues
- **No articles loading**: Check network connection
- **Old articles showing**: Clear browser cache (6-hour cache duration)

## 🔄 Fallback Behavior

If APIs are unavailable:
- YouTube: Shows curated sample content with proper attribution
- Medium: Shows sample articles representing typical content

Both integrations gracefully degrade and provide user feedback about data source.